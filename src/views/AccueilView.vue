<script setup>
import { Curtains, Plane, Vec2, PingPongPlane } from "curtainsjs";
import { onMounted, ref } from "vue";

window.addEventListener("load", () => {
  const curtains = new Curtains({
    container: "canvas",
    antialias: false, // render targets will disable default antialiasing anyway
    pixelRatio: Math.min(1.5, window.devicePixelRatio), // limit pixel ratio for performance
  })
    .onError(() => {
      // we will add a class to the document body to display original images
      document.body.classList.add("no-curtains");
    })
    .onContextLost(() => {
      // on context lost, try to restore the context
      curtains.restoreContext();
    });

  // mouse/touch move
  const ww = window.innerWidth;
  const wh = window.innerHeight;
  const mouse = new Vec2(ww / 2, wh / 2);
  const lastMouse = mouse.clone();
  const velocity = new Vec2();

  function onMouseMove(e) {
    // velocity is our mouse position minus our mouse last position
    lastMouse.copy(mouse);

    // touch event
    if (e.targetTouches) {
      mouse.set(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
    }
    // mouse event
    else {
      mouse.set(e.clientX, e.clientY);
    }

    // divided by a frame duration (roughly)
    velocity.set((mouse.x - lastMouse.x) / 16, (mouse.y - lastMouse.y) / 16);

    // we should update the velocity
    updateVelocity = true;
  }

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("touchmove", onMouseMove, {
    passive: true,
  });

  // if we should update the velocity or not
  let updateVelocity = false;

  // we'll be using this html element to create 2 planes
  const planeElement = document.getElementById("flowmap");

  // creating our PingPongPlane flowmap plane
  // flowmap shaders
  const flowmapVs = `
        #ifdef GL_FRAGMENT_PRECISION_HIGH
        precision highp float;
        #else
        precision mediump float;
        #endif
    
        // default mandatory variables
        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;
    
        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;
    
        // custom variables
        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;
    
        void main() {
    
            vec3 vertexPosition = aVertexPosition;
    
            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);
    
            // varyings
            vTextureCoord = aTextureCoord;
            vVertexPosition = vertexPosition;
        }
    `;

  const flowmapFs = `
        #ifdef GL_FRAGMENT_PRECISION_HIGH
        precision highp float;
        #else
        precision mediump float;
        #endif
    
        varying vec3 vVertexPosition;
        varying vec2 vTextureCoord;
    
        uniform sampler2D uFlowMap;
    
        uniform vec2 uMousePosition;
        uniform float uFalloff;
        uniform float uAlpha;
        uniform float uDissipation;
        uniform float uCursorGrow;
    
        uniform vec2 uVelocity;
        uniform float uAspect;
    
        void main() {
            vec2 textCoords = vTextureCoord;
            
            
            /*** comment this whole block for a regular mouse flow effect ***/
            
            // convert to -1 -> 1
            textCoords = textCoords * 2.0 - 1.0;
            
            // make the cursor grow with time
            textCoords /= uCursorGrow;
            // adjust cursor position based on its growth
            textCoords += uCursorGrow * uMousePosition / (1.0 / (uCursorGrow - 1.0) * pow(uCursorGrow, 2.0));
    
            // convert back to 0 -> 1
            textCoords = (textCoords + 1.0) / 2.0;
            /*** end of whole block commenting for a regular mouse flow effect ***/
    
    
            vec4 color = texture2D(uFlowMap, textCoords) * uDissipation;
            //vec4 color = vec4(0.0, 0.0, 0.0, 1.0) * uDissipation;
    
            vec2 mouseTexPos = (uMousePosition + 1.0) * 0.5;
            vec2 cursor = vTextureCoord - mouseTexPos;
            cursor.x *= uAspect;
    
            vec3 stamp = vec3(uVelocity * vec2(1.0, -1.0), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));
            float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;
            color.rgb = mix(color.rgb, stamp, vec3(falloff));
    
            // handle premultiply alpha
            color.rgb = color.rgb * color.a;
    
            gl_FragColor = color;
        }
    `;

  // note the use of half float texture and the custom sampler name used in our fragment shader
  const flowMapParams = {
    sampler: "uFlowMap",
    vertexShader: flowmapVs,
    fragmentShader: flowmapFs,
    texturesOptions: {
      floatingPoint: "half-float", // use half float texture when possible
    },
    uniforms: {
      mousePosition: {
        name: "uMousePosition",
        type: "2f",
        value: mouse,
      },
      // size of the cursor
      fallOff: {
        name: "uFalloff",
        type: "1f",
        value: ww > wh ? ww / 7500 : wh / 5000,
      },
      // how much the cursor should grow with time
      cursorGrow: {
        name: "uCursorGrow",
        type: "1f",
        value: 1.15,
      },
      // alpha of the cursor
      alpha: {
        name: "uAlpha",
        type: "1f",
        value: 1,
      },
      // how much the cursor must dissipate over time (ie trail length)
      // closer to 1 = no dissipation
      dissipation: {
        name: "uDissipation",
        type: "1f",
        value: 0.925,
      },
      // our velocity
      velocity: {
        name: "uVelocity",
        type: "2f",
        value: velocity,
      },
      // window aspect ratio to draw a circle
      aspect: {
        name: "uAspect",
        type: "1f",
        value: ww / wh,
      },
    },
  };

  // our ping pong plane
  const flowMap = new PingPongPlane(curtains, planeElement, flowMapParams);

  flowMap
    .onRender(() => {
      // update mouse position
      flowMap.uniforms.mousePosition.value = flowMap.mouseToPlaneCoords(mouse);

      // update velocity
      if (!updateVelocity) {
        velocity.set(curtains.lerp(velocity.x, 0, 0.5), curtains.lerp(velocity.y, 0, 0.5));
      }
      updateVelocity = false;

      flowMap.uniforms.velocity.value = new Vec2(curtains.lerp(velocity.x, 0, 0.1), curtains.lerp(velocity.y, 0, 0.1));
    })
    .onAfterResize(() => {
      // update our window aspect ratio uniform
      const boundingRect = flowMap.getBoundingRect();
      flowMap.uniforms.aspect.value = boundingRect.width / boundingRect.height;
      flowMap.uniforms.fallOff.value = boundingRect.width > boundingRect.height ? boundingRect.width / 30000 : boundingRect.height / 20000;
    });

  // now use the texture of our ping pong plane in the plane that will actually be displayed
  // displacement shaders
  const displacementVs = `
        #ifdef GL_FRAGMENT_PRECISION_HIGH
        precision highp float;
        #else
        precision mediump float;
        #endif
    
        // default mandatory variables
        attribute vec3 aVertexPosition;
        attribute vec2 aTextureCoord;
    
        uniform mat4 uMVMatrix;
        uniform mat4 uPMatrix;
    
        uniform mat4 planeTextureMatrix;
    
        // custom variables
        varying vec3 vVertexPosition;
        varying vec2 vPlaneTextureCoord;
        varying vec2 vTextureCoord;
    
        void main() {
    
            vec3 vertexPosition = aVertexPosition;
    
            gl_Position = uPMatrix * uMVMatrix * vec4(vertexPosition, 1.0);
    
            // varyings
            vTextureCoord = aTextureCoord;
            vPlaneTextureCoord = (planeTextureMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
            vVertexPosition = vertexPosition;
        }
    `;

  const displacementFs = `
        #ifdef GL_FRAGMENT_PRECISION_HIGH
        precision highp float;
        #else
        precision mediump float;
        #endif
    
        varying vec3 vVertexPosition;
        varying vec2 vPlaneTextureCoord;
        varying vec2 vTextureCoord;
    
        uniform sampler2D planeTexture;
        uniform sampler2D uFlowTexture;
    
        void main() {
            // our flowmap
            vec4 flowTexture = texture2D(uFlowTexture, vTextureCoord);
    
            // distort our image texture based on the flowmap values
            vec2 distortedCoords = vPlaneTextureCoord;
            distortedCoords -= flowTexture.xy * 0.25;
    
            // get our final texture based on the displaced coords
            vec4 texture = texture2D(planeTexture, distortedCoords);
    
            // get a B&W version of our image texture
            vec4 textureBW = vec4(1.0);
            textureBW.rgb = vec3(texture.r * 0.3 + texture.g * 0.59 + texture.b * 0.11);
    
            // mix the BW image and the colored one based on our flowmap color values
            float mixValue = clamp((abs(flowTexture.r) + abs(flowTexture.g) + abs(flowTexture.b)) * 1.5, 0.0, 1.0);
            texture = mix(texture, textureBW, mixValue);
    
            // switch between this 2 lines to see what we have drawn onto our flowmap
            //gl_FragColor = flowTexture;
            gl_FragColor = texture;
        }
    `;

  // next we will create the plane that will actually display our end result
  // which means the image texture that will be displaced using the ping pong FBO texture
  const params = {
    vertexShader: displacementVs,
    fragmentShader: displacementFs,
  };

  const plane = new Plane(curtains, planeElement, params);

  // create a texture that will hold our flowmap
  const flowTexture = plane.createTexture({
    sampler: "uFlowTexture",
    fromTexture: flowMap.getTexture(), // set it based on our PingPongPlane flowmap plane's texture
  });
});
let isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1100);
});
</script>

<template>
  <div class="2xl:overflow-hidden ">
    <div v-if="isLoading" class="loader absolute top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-[#D3D1CC]">
      <div class="h-20 w-20 animate-ping"></div>
    </div>

    <div class="flex flex-col mt-5 gap-1 items-center justify-center sm:hidden">
        <img src="../assets/test1.gif" alt="dégradé de couleur animé" />
    </div>

    <div class="mt-[2vh] text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[6.5rem] 3xl:text-[8.5rem]">
      <div class="flex items-center justify-between gap-5 md:h-[13vh] mt-0 md:-mt-5 lg:mt-0">
        <h1 class="-mb-6 font-light uppercase text-[#154d13]">Digital</h1>
        <img src="../assets/test1.gif" alt="dégradé de couleur animé" class="hidden max-h-[10vh] w-full sm:block lg:max-h-[12.5vh] max-w-[33vw] lg:max-w-none" />
      </div>
      <div class="flex items-center justify-between gap-5 md:h-[13vh] mt-0 md:-mt-5 : lg:mt-0">
        <h1 class="-mb-6 font-light uppercase text-[#154d13]">Designer</h1>
        <img src="../assets/test2.gif" alt="dégradé de couleur animé" class="hidden max-h-[10vh] w-full sm:block lg:max-h-[12.5vh] max-w-[33vw] lg:max-w-none" />
      </div>
      <div class="flex items-center justify-between gap-5 md:h-[13vh] mt-0 md:-mt-5 lg:mt-0">
        <h1 class="-mb-6 font-light uppercase text-[#154d13]">Creative</h1>
        <img src="../assets/test3.gif" alt="dégradé de couleur animé" class="hidden max-h-[10vh] w-full sm:block lg:max-h-[12.5vh] max-w-[33vw] lg:max-w-none" />
      </div>
      <div class="flex items-center justify-between gap-5 md:h-[13vh] mt-0 md:-mt-5 lg:mt-0">
        <h1 class="-mb-6 font-light uppercase text-[#154d13]">Developer</h1>
        <img src="../assets/test4.gif" alt="dégradé de couleur animé" class="hidden max-h-[10vh] w-full sm:block lg:max-h-[12.5vh] max-w-[33vw] lg:max-w-none" />
      </div>
    </div>

    <div class="flex flex-col mt-5 gap-1 items-center justify-center sm:hidden">
        <img src="../assets/test2.gif" alt="dégradé de couleur animé" />
        <img src="../assets/test3.gif" alt="dégradé de couleur animé" />
        <img src="../assets/test4.gif" alt="dégradé de couleur animé" />
    </div>

    <div id="container" class="relative mt-6 hidden sm:block ">
      <div id="canvas" class="fixed inset-auto z-10 h-[15vh] w-[90vw]"></div>
      <div id="flowmap" class="h-[15vh] w-[90vw]">
        <img src="../assets/grid.jpg" class="h-[15vh] w-[90vw]" crossorigin="" data-sampler="planeTexture" />
      </div>
    </div>
  </div>
</template>

<style>
.loader div {
  background-image: url(../assets/bg2.png);
}
</style>

<script>
import { onMounted, defineComponent } from "vue";
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene, GltfModel } from "troisjs";
export default defineComponent({
  components: {
    Renderer,
    Scene,
    Camera,
    PointLight,
    GltfModel,
  },
  setup() {
    function onReady(e) {
      console.log("render is ready", e);
    }

    return {
      onReady,
    };
  },
});
</script>

<template>
  <div>
    <h1 class="self-start text-[8.5rem] uppercase leading-none text-[#154d13]">DL44</h1>
    <div class="flex justify-between gap-10 text-xl font-normal text-[#154d13]">
      <div class="flex flex-1 flex-col">
        <p>
          This Website was created during an exam in my first year of BUT MMI. The goal was to imagine a music festival with all its graphic
          identity and then develop the website in vuejs.
        </p>
        <br />
        <p>
          First I thought of a hiphop festival gathering artists from different nationality and language. I began by drawing some logos on
          paper to find an interesting design. I then finalized the design on Illustrator. Next I began to work on Figma for the website
          design.
        </p>
      </div>
      <div class="flex flex-1 flex-col">
        <Renderer alpha antialias :orbitCtrl="true">
          <Camera :position="{ z: 5, x: 0, y: 0 }" />
          <Scene>
            <PointLight :position="{ y: 50, z: 50 }" />
            <PointLight :position="{ y: -100, z: -50 }" />
            <PointLight :position="{ y: 100, x: -50 }" />
            <PointLight :position="{ y: -100, x: -50 }" />
            <GltfModel src="src\assets\Dl44\dl44.gltf" @load="onReady" />
          </Scene>
        </Renderer>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
</script>

<template>
  <div>
    <div id="anchor" class="absolute top-0"></div>
    <a
      href="#anchor"
      class="fixed bottom-20 right-[5vw] flex h-14 w-14 items-center justify-center bg-[#154d13] text-xl font-normal text-white opacity-50 transition-all hover:h-16 hover:w-16 hover:opacity-100"
      >TOP</a
    >

    <h1
      class="mt-5 self-start text-[3.5rem] uppercase leading-none text-[#154d13] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[7rem] 3xl:text-[8.5rem]"
    >
      Boxe Game
    </h1>
    <div class="mt-[2vh] flex flex-col justify-between gap-10 text-xl font-normal text-[#154d13] md:flex-row">
      <div class="flex flex-1 flex-col">
        <p>
          During second year of studies, the second semester exam goal was to create an Unreal Engine 5 video game. I decided to create a
          boxing game with robots made of two levels, so two opponents to beat to win the game.
        </p>
        <br />
        <p>
          The timing for this exam was short but it made me progress much faster. I became more familiar with blueprint which was the part i
          found the most difficult at first. I could also tried new things like create my first cinematic to introduce levels. I could
          practice all the different tasks around animations, character rig and import, level design, scene lighting ...
        </p>
      </div>
      <div class="flex flex-1 flex-col">
        <img src="../assets/Dl44/render.png" alt="" class="small" />
      </div>
    </div>

    <div class="my-10 flex flex-col items-center justify-between gap-10 text-xl font-normal text-[#154d13] sm:flex-row">
      <div class="flex flex-1 flex-col">
        <img src="../assets/Dl44/step1.png" alt="" />
      </div>
      <div class="flex flex-1 flex-col">
        <img src="../assets/Dl44/step2.png" alt="" />
      </div>
      <div class="flex flex-1 flex-col">
        <img src="../assets/Dl44/step3.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style></style>

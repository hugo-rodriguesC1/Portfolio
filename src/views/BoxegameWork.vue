<script setup>
import { onMounted } from "vue";

</script>

<template>
  <div>
    <div id="anchor" class="absolute top-0"></div>
    <a href="#anchor" class="fixed bottom-20 right-[5vw] bg-[#154d13] opacity-50 w-14 h-14 flex justify-center items-center font-normal text-xl text-white hover:opacity-100 hover:w-16 hover:h-16 transition-all">TOP</a>

    <h1 class="self-start text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[7rem] 3xl:text-[8.5rem] uppercase leading-none text-[#154d13] mt-5">Boxe Game</h1>
    <div class="flex flex-col md:flex-row justify-between gap-10 text-xl font-normal text-[#154d13] mt-[2vh]">
      <div class="flex flex-1 flex-col">
        <p>
          This is my first creation with Blender. In the same time, I was developping a star wars based video game, so I decided to model
          the blaster whiwh will be used in the game.
        </p>
        <br />
        <p>
          This work allows me to learn the bases of modeling with Blender. I used multiple modifiers and I could begin to learn some stuff on materials.
        </p>
        <br>
        <p>The goal was to export the model in order to use it on an Unreal Engine 5 project.</p>
      </div>
      <div class="flex flex-1 flex-col">
        <img src="../assets/Dl44/render.png" alt="" class="small"/>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row items-center justify-between gap-10 text-xl font-normal text-[#154d13] my-10">
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

<style>
</style>

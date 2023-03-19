<script setup>
import { onMounted } from "vue";
</script>

<template>
  <div class="mb-48">
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
        <video class="" src="../assets/BoxeGame//StartCinematic.mp4" controls autoplay loop></video>
      </div>
    </div>

    <div class="my-10 flex flex-col items-center justify-between gap-10 text-xl font-normal text-[#154d13] md:flex-row">
      <div class="md:flex flex-1 flex-col hidden">
        <img src="../assets/BoxeGame/Scene.webp" alt="scene du jeu" />
      </div>
      <div class="flex flex-1 flex-col">
        <p class="mt-10">
          The first step was to create the scene. I wanted an underground ambiance in a futuristic style, I was inspired by Real Steel
          movie. With website like Sketchfab or CGTrader, you can find a large choice of 3D models for free to work with.
        </p>
        <br />
        <p class="">
          lighting was crucial to create this dark but visible environment. I worked with different light sources and reflection of
          materials to create such an ambiance.
        </p>
      </div>
      <div class="flex flex-1 flex-col md:hidden">
        <img src="../assets/BoxeGame/Scene.webp" alt="scene du jeu" />
      </div>
    </div>

    <div class="my-10 flex flex-col items-center justify-between gap-10 text-xl font-normal text-[#154d13] md:flex-row">
      <div class="flex flex-1 flex-col">
        <p class="mt-10">
          Next, I started the development of the playable character. I found the model of this robot on CGTrader and I used AccuRIG to rig
          this model in order to use animations on it.
        </p>
        <br />
        <p class="">
          When the model and animations were done, I could started the Blueprint part of the character. It is a node system so you don't
          need to write any line of code.
        </p>
      </div>
      <div class="flex flex-1 flex-col">
        <img src="../assets/BoxeGame/Robot.webp" alt="robot" />
      </div>
      <div class="flex flex-1 flex-col">
        <img src="../assets/BoxeGame/BP.webp" alt="blueprint du robot" />
      </div>
    </div>

    <div class="my-10 flex flex-col items-center justify-between gap-10 text-xl font-normal text-[#154d13] md:flex-row">
      <div class="md:flex flex-1 flex-col hidden">
        <img src="../assets/BoxeGame/Random.webp" alt="fonctions random" />
      </div>
      <div class="md:flex flex-1 flex-col hidden items-center justify-center">
        <img src="../assets/BoxeGame/Ennemy.webp" alt="robot ennemi" class="w-4/5" />
      </div>
      <div class="flex flex-1 flex-col">
        <p class="mt-10">
          I then developped the opponent character. The design is based on the first character. I needed to develop an AI.
        </p>
        <br />
        <p class="">
          It was my first time developping an AI so I used simple method such as random function to make the AI more realistic. It can lauch
          different attacks with different amount of damage randomly so you can't really predict its movements.
        </p>
      </div>
      <div class="flex flex-1 flex-col md:hidden">
        <img src="../assets/BoxeGame/Random.webp" alt="fonctions random" />
      </div>
      <div class="flex flex-1 flex-col md:hidden items-center justify-center">
        <img src="../assets/BoxeGame/Ennemy.webp" alt="robot ennemi" class="w-4/5" />
      </div>
    </div>

    <div class="my-10 flex flex-col items-center justify-between gap-10 text-xl font-normal text-[#154d13] sm:flex-row">
      <div class="flex flex-1 flex-col items-center">
        <p class="my-32 w-1/2">Finally, I joined all the elements together, added menus and navigation between levels and it took form.</p>
        <br />
        <video class="sm:w-3/5" src="../assets/BoxeGame/Final.mp4" controls></video>
      </div>
    </div>
  </div>
</template>

<style></style>

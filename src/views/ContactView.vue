<script setup>
import { onMounted } from "vue";
</script>

<template>
  <div>
    <h1
      class="self-start text-[3.5rem] uppercase leading-none text-[#154d13] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[7rem] 3xl:text-[8.5rem] mt-5"
    >
      Contact
    </h1>
    <div class="mt-[2vh] flex justify-between gap-10 text-xl xl:text-2xl font-normal text-[#154d13]">
      <div class="flex flex-1 flex-col gap-5">
        <img src="../assets/test1.gif" alt="" class="h-1 w-full md:w-[40vw]">
        <div class="flex gap-6 items-center">
          <div class="relative"><img src="../assets/test1.gif" alt="" class="absolute inset-0 h-full w-full rounded-sm -z-10"><a href="https://www.linkedin.com/in/hugorodrigues90/"><img src="../assets/Icons/Linkedin.png" alt="linkedin logo" class=" p-1  hover:bg-green-800 transition-colors"></a></div>
          <div>Hugo Rodrigues</div>
        </div>
        <div class="flex gap-6 items-center">
          <div class="relative"><img src="../assets/test2.gif" alt="" class="absolute inset-0 h-full w-full rounded-sm -z-10"><a href="mailto:rodrig.hugo90@gmail.com" class="min-w-[58px]"><img src="../assets/Icons/Mail.png" alt="mail logo" class=" p-1  hover:bg-green-700 transition-colors"></a></div>
          <div>rodrig.hugo90@gmail.com</div>
        </div>
        <div class="flex gap-6 items-center">
          <div class="relative"><img src="../assets/test3.gif" alt="" class="absolute inset-0 h-full w-full rounded-sm -z-10"><img src="../assets/Icons/Location.png" alt="icone de position" class="p-1"></div>
          <div>Montbéliard, FR</div>
        </div>
        <img src="../assets/test2.gif" alt="" class="h-1 w-full md:w-[40vw]">
      </div>
    </div>
  </div>
</template>

<style></style>

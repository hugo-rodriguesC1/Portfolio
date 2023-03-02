<template>
  <div >
    <div class="noise"></div>
    <div class="font-normal text-3xl text-[#154D13] border-2 border-white 3xl:p-10 p-6  mt-[7.5vh] mx-[5vw] flex items-center justify-between" >
      <router-link to="/work">work</router-link>
      <router-link to="/contact">contact</router-link>
    </div>
    <router-view class=" mx-[5vw]"></router-view>

    <router-link to="/" class="font-normal text-xl text-[#154d13] flex items-center justify-center 3xl:mt-8 mt-4" >Hugo Rodrigues</router-link>

  </div>
</template>

<style>

.noise::before{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    content: "";
    opacity: .1;
    z-index: 100;
    pointer-events: none;
    background: url(./assets/noise.gif);
}

</style>

<script setup>
import IconLogo from "./components/icons/IconLogo.vue";
import { FilmIcon } from "@heroicons/vue/outline";
</script>
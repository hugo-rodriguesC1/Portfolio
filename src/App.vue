<script setup>
import { onMounted } from "vue";

function Refresh() {
  setTimeout(() => {
    document.location.reload();
  }, 1);
}
</script>

<template>
  <div>
    <div class="noise"></div>
    <div
      class="fixed top-0 left-0 right-0 mx-[5vw] mt-[7.5vh] flex items-center justify-between border-2 border-white bg-[#D3D1CC] p-6 text-3xl font-light text-[#154D13] 3xl:p-10"
    >
      <router-link to="/work">work</router-link>
      <router-link to="/" @click="Refresh()" class="my-2 flex items-center justify-center text-xl font-normal text-[#154d13] 3xl:mt-[3.5vh]"
        >Hugo Rodrigues</router-link
      >
      <router-link to="/contact">contact</router-link>
    </div>
    <router-view class="mx-[5vw] mt-[25vh] 3xl:mt-[20vh]"></router-view>
  </div>
</template>


<style>
.noise::before {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  content: "";
  opacity: 0.1;
  z-index: 100;
  pointer-events: none;
  background: url(./assets/noise.gif);
}
</style>


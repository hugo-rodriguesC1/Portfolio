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
      class="fixed top-0 left-0 right-0 mx-[5vw] mt-[7.5vh] flex items-center justify-between border-2 border-white bg-[#D3D1CC] py-6 px-10 text-3xl font-light text-[#154D13] 3xl:p-8"
    >
      <router-link to="/work" class="before:w-full before:h-full before:rounded-sm before:opacity-0 before:transition-all transition-all before:absolute before:top-0 before:hover:opacity-100 relative p-4 before:left-0 before:right-0 before:bg-[url(./assets/bg3.png)] before:bg-cover hover:text-white before:-z-10">work</router-link>
      <router-link to="/" @click="Refresh()" class="my-2 flex items-center justify-center text-xl font-normal text-[#154d13] relative before:transition-all after:transition-all" id="home"
        >Hugo Rodrigues</router-link
      >
      <router-link to="/contact" class="before:w-full before:h-full before:rounded-sm before:opacity-0 before:transition-all transition-all before:absolute before:top-0 before:hover:opacity-100 relative p-4 before:left-0 before:right-0 before:bg-[url(./assets/bg3.png)] before:bg-cover hover:text-white before:-z-10">contact</router-link>
    </div>
    <router-view class="mx-[5vw] mt-[25vh] 3xl:mt-[22vh] mb-20"></router-view>
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
  opacity: 0.08;
  z-index: 100;
  pointer-events: none;
  background: url(./assets/noise.gif);
}

#home::before {
  content: "";
  width: 130%;
  background: url(./assets/bg4.png);
  height: 3px;
  position: absolute;
  top: -30%;
  left: -15%;
  transform: translate(30%);
  opacity: 0;

}
#home::after {
  content: "";
  width: 130%;
  background: url(./assets/bg4.png);
  height: 3px;
  position: absolute;
  bottom: -30%;
  left: -15%;
  transform: translate(-30%);
  opacity: 0;
}
#home:hover::before {
  transform: translate(0%);
  opacity: 100%;
}
#home:hover::after {
  transform: translate(0%);
  opacity: 100%;
}

</style>

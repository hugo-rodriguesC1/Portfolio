<script setup>
import ButtonView from "../components/ButtonView.vue";

</script>

<template>
  <div>
    <div id="anchor" class="absolute top-0"></div>
    <a
      href="#anchor"
      class="fixed bottom-20 right-[5vw] flex h-14 w-14 items-center justify-center bg-[#154d13] text-xl font-normal text-white opacity-50 transition-all hover:h-16 hover:w-16 hover:opacity-100"
      >TOP</a
    >

    <h1 class="self-start text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[6.5rem] 2xl:text-[8.5rem] uppercase leading-none text-[#154d13]">Data visualization</h1>
    <div class="flex flex-col lg:flex-row justify-between gap-10 text-xl font-normal text-[#154d13] mt-[2vh]">
      <div class="flex flex-1 flex-col">
        <p>
          This site was created as part of an exam of the BUT MMI 2nd year. The objective was to develop a data visualization website.
          The site is developed in VueJS, the graphics are developed using chartJS.
        </p>
        <br />
        <p>
          The average region consumption page was developed using a leaflet map which allows click on region to update diplayed datas.
        </p>
        <br />
        <ButtonView text="website" link="http://datavisualisationenergie.hrodrigues.fr/"/>

      </div>
      <div class="flex flex-1 flex-col">
        <img src="../assets/Dataviz/viz.png" alt="" class="small" />
      </div>
    </div>

    <div class="my-10 flex flex-col md:flex-row items-center justify-between gap-10 text-xl font-normal text-[#154d13]">
      <div class="flex flex-1 flex-col">
        <img src="../assets/Dataviz/viz2.png" alt="" />
      </div>
      <div class="flex flex-1 flex-col">
        <img src="../assets/Dataviz/viz3.png" alt="" />
      </div>
      <div class="flex flex-1 flex-col">
        <img src="../assets/Dataviz/viz4.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style></style>

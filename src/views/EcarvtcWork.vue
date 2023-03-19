<script setup>
import ButtonView from "../components/ButtonView.vue";
</script>


<template>
  <div class="flex flex-col items-center mb-48">
    <div id="anchor" class="absolute top-0"></div>
    <a
      href="#anchor"
      class="fixed bottom-20 right-[5vw] flex h-14 w-14 items-center justify-center bg-[#154d13] text-xl font-normal text-white opacity-50 transition-all hover:h-16 hover:w-16 hover:opacity-100"
      >TOP</a
    >

    <h1 class="self-start text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[7rem]  3xl:text-[8.5rem] uppercase leading-none text-[#154d13] mt-5">EcarVTC</h1>
    <div class="flex flex-col lg:flex-row justify-between gap-10 text-xl font-normal text-[#154d13] mt-[2vh]">
      <div class="flex flex-1 flex-col">
        <p>
          This is the project of the second year of BUT MMI. With three classmates, we worked for a private driver to design his website. I
          did the web develoment part of the project. The website is responsive and allows to book a travel directly online. 
        </p>
        <br />
        <p>
          I used Wordpress to create the website. I also create a custom Wordpress theme. This project allowed me to learn how Wordpress
          themes work. The private driver needed an online booking system on the website so I used a Wordpress plugin which works with 
          Google Maps API, and online payment platforms to implement such a functionality on the website.
        </p>
        <br>
        <ButtonView text="website" link="https://e-car-vtc.fr/"/>
      </div>
      <div class="flex flex-1 flex-col">
        <img src="../assets/Ecarvtc/ecar1.webp" alt="accueil ecarvtc" class="small" />
      </div>
    </div>

    <div class="flex flex-col lg:flex-row items-center justify-between gap-10 text-xl font-normal text-[#154d13] my-10">
      <div class="flex flex-1 flex-col">
        <img src="../assets/Ecarvtc/ecar2.webp" alt="plugin de réservation ecarvtc" />
      </div>
      <div class="flex flex-1 flex-col">
        <img src="../assets/Ecarvtc/ecar3.webp" alt="pied de page ecarvtc" />
      </div>
      <div class="flex flex-1 flex-col">
        <img src="../assets/Ecarvtc/ecar4.webp" alt="page tarif ecarvtc" />
      </div>

    </div>
  </div>
</template>


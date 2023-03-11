<script setup>
import ButtonView from "../components/ButtonView.vue";
</script>

<template>
  <div class="flex flex-col items-center">


    <div id="anchor" class="absolute top-0"></div>
    <a href="#anchor" class="fixed bottom-20 right-[5vw] bg-[#154d13] opacity-50 w-14 h-14 flex justify-center items-center font-normal text-xl text-white hover:opacity-100 hover:w-16 hover:h-16 transition-all">TOP</a>


    <h1 class="self-start text-[8.5rem] uppercase leading-none text-[#154d13]">BlendUp</h1>
    <div class="flex justify-between gap-10 text-xl font-normal text-[#154d13]">
      <div class="flex flex-1 flex-col">
        <p>
          This Website was created during an exam in my first year of BUT MMI. The goal was to imagine a music festival with all its graphic
          identity and then develop the website in vuejs.
        </p>
        <br />
        <img src="../assets/Blendup/Logo.png" alt="" />
        <br />
        <p>
          First I thought of a hiphop festival gathering artists from different nationality and language. I began by drawing some logos on
          paper to find an interesting design. I then finalized the design on Illustrator. Next I began to work on Figma for the website
          design.
        </p>
      </div>
      <div class="flex flex-1 flex-col">
        <img src="../assets/Blendup/Essais.png" alt="" />
      </div>
    </div>

    <div class="mt-10 flex items-center justify-between gap-10 text-xl font-normal text-[#154d13]">
      <div class="flex flex-col">
        <img src="../assets/Blendup/Home.png" alt="" />
      </div>
      <div class="flex flex-col">
        <img src="../assets/Blendup/accueilMobile.png" alt="" />
      </div>
    </div>

    <p class="my-10 w-1/2 text-center text-xl font-normal text-[#154d13]">
      The website design is fully responsive. I developped it with vuejs and supabase. Artists list and sessions come from the backoffice. I
      have also set up an admin part of the website where I can directly add, modify or delete artists or sessions on the website
    </p>

    <div class="flex items-center justify-between gap-10 text-xl font-normal text-[#154d13] mb-10">
      <div class="flex flex-1 flex-col">
        <img src="../assets/Blendup/pages1.png" alt="" />
      </div>
      <div class="flex flex-1 flex-col">
        <img src="../assets/Blendup/pages2.png" alt="" />
      </div>
      <div class="flex flex-1 flex-col">
        <img src="../assets/Blendup/pages3.png" alt="" />
      </div>
    </div>

    <ButtonView text="Website" link="http://sae203.hrodrigues.fr/"></ButtonView>
  </div>
</template>



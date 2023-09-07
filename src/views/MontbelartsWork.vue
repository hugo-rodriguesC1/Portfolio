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

    <h1 class="self-start text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[7rem]  3xl:text-[8.5rem] uppercase leading-none text-[#154d13] mt-5">Montbel'Arts</h1>
    <div class="flex flex-col lg:flex-row justify-between gap-10 text-xl font-normal text-[#154d13] mt-[2vh]">
      <div class="flex flex-1 flex-col">
        <p>
          Montbel'Arts is the Montbeléliard conservatory association of users. I made an internship of 10 weeks in this association for my second year of BUT MMI.
          My assignment was to create the assocition website from the rework of the logo to the development of the website.
        </p>
        <br />
        <p>
          I began by proposing a new modernised logo for the association. Then I created the design of the website on Figma and I sat up a new graphic identity.
          Finally, I used Wordpress to create the website. Through the development I could learn new parts of Wordpress such as content upload by users and how to handle it.
          Indeed, the website helps users to know the association news but it is also useful to carpooling or offers of instruments for example.
        </p>
        <br>
        <ButtonView text="website" link="https://montbelarts.fr/"/>
      </div>
      <div class="flex flex-1 flex-col">
        <img src="../assets/Montbelarts/montbel1.png" alt="accueil Montbelarts" class="small" />
      </div>
    </div>


  </div>
</template>


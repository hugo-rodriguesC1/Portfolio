<script setup>
import ButtonView from "../components/ButtonView.vue";
</script>

<template>
  <div class="flex flex-col items-center ">
    <h1 class="self-start text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[6.5rem] 2xl:text-[8.5rem] uppercase leading-none text-[#154d13]">Autofill</h1>
    <div class="mt-[2vh] flex flex-col xs:flex-row w-full items-start justify-between gap-[2vw] text-xl font-normal text-[#154d13]">
      <div class="flex flex-1 flex-col">
        <p>
          In my spare time, I developed a chrome extension. This is an autofill for the Supreme site. The extension fills in the user's
          contact details and payment information during checkout.
        </p>
        <br />
        <p>
          This project allowed me to familiarize myself with the basics of JavaScript and also gave me the basics of developing Chrome
          extensions, in particular the different types of extensions but also the "storage" which allows data to be stored, locally or
          online from the extension.
        </p>
        <br />
        <p>The project is downloadable from my Github, with the link below.</p>
        <br />
        <ButtonView class="mb-10" text="Github" link="http://sae203.hrodrigues.fr/"></ButtonView>
      </div>
      <div class="flex flex-1 flex-col gap-[2vw] lg:flex-row">
        <div class="flex flex-1 flex-grow"><img src="../assets/Autofill/accueil.png" alt="" class="w-full object-contain" /></div>
        <div class="flex flex-1 flex-grow"><img src="../assets/Autofill/info.png" alt="" class="w-full object-contain" /></div>
      </div>
    </div>
  </div>
</template>


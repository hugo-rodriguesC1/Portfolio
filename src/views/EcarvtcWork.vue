<template>
    <div class="flex flex-col items-center">
      <h1 class="text-[8.5rem] uppercase leading-none text-[#154d13] self-start">Autofill</h1>
      <div class="mt-[2vh] flex w-full justify-between gap-[2vw] text-xl font-normal text-[#154d13]">
        <div class="flex flex-1 flex-col">
          <p>
            Dans mon temps libre, j'ai développé une extension chrome. Il s'agit d'un autofill pour le site Supreme. L'extension remplit les
            coordonnées et les informations de paiement de l'utilisateur lors du paiement de la commande.
          </p>
          <br />
          <p>
            Ce projet m'a permis de me familiariser avec les bases de JavaScript et m'a également apporté les notions élémentaires concernant
            le développement d'extensions Chrome, notamment les différents types d'extensions mais également le "storage" qui permet de
            stocker des données localement ou en ligne depuis l'extension.
          </p>
          <br />
          <p>Le projet est téléchargeable depuis mon Github, avec le lien ci-dessous.</p>
          <br>
          <ButtonView>Github</ButtonView>
        </div>
        <div class="flex flex-1 gap-[2vw] flex-col lg:flex-row">
          <div class="flex flex-1 flex-grow"><img src="../assets/" alt="" class="w-full object-contain" /></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import ButtonView from '../components/ButtonView.vue';
  
  </script>
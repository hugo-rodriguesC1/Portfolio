<template>
  <div class="mb-28">
    <router-link to="/montbelartswork" class=" flex flex-col md:flex-row md:items-center  gap-[2vw] uppercase text-[#154d13]">
      <h2 class="xl:text-[7rem] 3xl:text-[8.5rem] text-[4rem] hidden sm:block">Montbel&nbsp;Arts</h2>
      <h2 class="xl:text-[7rem] 3xl:text-[8.5rem] text-[4rem] sm:hidden">Montbel'Arts</h2>
      <div class="xl:text-2xl text-lg leading-none">
        Wordpress website for Montbéliard conservatory association of users. 
      </div>
    </router-link>

    <div class="my-7 h-0.5 w-full bg-[#154d13]"></div>

    <router-link to="/ecarvtcwork" class=" flex flex-col md:flex-row md:items-center  gap-[2vw] uppercase text-[#154d13]">
      <h2 class="xl:text-[7rem] 3xl:text-[8.5rem] text-[4rem] leading-none mt-5">Ecarvtc</h2>
      <div class="xl:text-2xl text-lg leading-none">
        Wordpress website for private driver with wordpress theme development and booking plugin implementation
      </div>
    </router-link>

    <div class="my-7 h-0.5 w-full bg-[#154d13]"></div>

    <router-link to="/blendupwork" class="flex flex-col md:flex-row md:items-center gap-[2vw] uppercase leading-none text-[#154d13]">
      <h2 class="xl:text-[7rem] 3xl:text-[8.5rem] text-[4rem]">BlendUp</h2>
      <div class="xl:text-2xl text-lg leading-none">
        Music festival website developped in vuejs with supabase in the first year of BUT MMI. Fully responsive design and logo creation
      </div>
    </router-link>

    <div class="my-7 h-0.5 w-full bg-[#154d13]"></div>

    <router-link to="/autofillwork" class="flex flex-col md:flex-row md:items-center gap-[2vw] uppercase leading-none text-[#154d13]">
      <h2 class="xl:text-[7rem] 3xl:text-[8.5rem] text-[4rem]">Autofill</h2>
      <div class="xl:text-2xl text-lg leading-none">Chrome extension developped in javascript. Autofill script for supreme.com checkout page</div>
    </router-link>

    <div class="my-7 h-0.5 w-full bg-[#154d13]"></div>

    <router-link to="/dl44work" class="flex flex-col md:flex-row md:items-center gap-[2vw] uppercase leading-none text-[#154d13]">
      <h2 class="xl:text-[7rem] 3xl:text-[8.5rem] text-[4rem]">DL44</h2>
      <div class="xl:text-2xl text-lg leading-none">
        First Blender creation, the famous Han Solo blaster from star wars. Made to be used in a unreal engine 5 project
      </div>
    </router-link>

    <div class="my-7 h-0.5 w-full bg-[#154d13]"></div>

    <router-link to="/datavizwork" class="flex flex-col md:flex-row md:items-center gap-[2vw] uppercase leading-none text-[#154d13]">
      <h2 class="xl:text-[7rem] 3xl:text-[8.5rem] text-[4rem]">Dataviz</h2>
      <div class="xl:text-2xl text-lg leading-none">Data visualization website developed in vuejs with chartjs, energy consumption in france</div>
    </router-link>

    <div class="my-7 h-0.5 w-full bg-[#154d13]"></div>

    <router-link to="/boxegamework" class="flex flex-col md:flex-row md:items-center gap-[2vw] uppercase leading-none text-[#154d13]">
      <h2 class="xl:text-[7rem] 3xl:text-[8.5rem] text-[4rem] hidden sm:block">Boxe&nbsp;Game</h2>
      <h2 class="xl:text-[7rem] 3xl:text-[8.5rem] text-[4rem] sm:hidden">Boxe Game</h2>
      <div class="xl:text-2xl text-lg leading-none">Robot boxing game made in unreal engine 5 in 3 days</div>
    </router-link>
  </div>
</template>


<script>
function Refresh() {
  setTimeout(() => {
    document.location.reload();
  }, 1);
}
</script>
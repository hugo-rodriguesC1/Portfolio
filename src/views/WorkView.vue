<template>

  <div>
      <router-link to="/ecarvtcwork" class="flex items-center text-[#154d13] uppercase gap-[2vw] mt-[4]">
        <h2 class="text-[8.5rem] leading-none">Ecarvtc</h2>
        <div class="text-2xl leading-none">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla nunc quis gravida feugiat. Cras commodo suscipit leo a
          lobortis. Fusce ultricies metus et turpis tempus, et tincidunt nisi hendrerit.
        </div>
      </router-link>

      <div class="w-full h-0.5 bg-[#154d13] my-7"></div>

      <router-link to="/blendupwork" class="flex items-center text-[#154d13] uppercase gap-[2vw] leading-none">
        <div class="text-2xl leading-none">
          Music festival website developped in vuejs with supabase in the first year of BUT MMI. Design fully responsive and logo creation
        </div>
        <h2 class="text-[8.5rem]">BlendUp</h2>
      </router-link>

      <div class="w-full h-0.5 bg-[#154d13] my-7"></div>

      <router-link to="/autofillwork" class="flex items-center text-[#154d13] uppercase gap-[2vw] leading-none">
        <h2 class="text-[8.5rem]">Autofill</h2>
        <div class="text-2xl leading-none">
          Chrome extension developped in javascript. Autofill script for supreme.com checkout page
        </div>
      </router-link>
      
      <div class="w-full h-0.5 bg-[#154d13] my-7"></div>

      <router-link to="/dl44work" class="flex items-center text-[#154d13] uppercase gap-[2vw] leading-none">
        <div class="text-2xl leading-none">
          First Blender creation, the famous Han Solo blaster from star wars. Made to be used in a unreal engine 5 project
        </div>
        <h2 class="text-[8.5rem]">DL44</h2>
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
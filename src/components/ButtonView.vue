<script setup>

import { defineProps } from "vue";

const props = defineProps({
    text: String,
    link: String
})

</script>


<template>
    <div class="text-xl font-normal bg-[#fff] text-[#154d13] px-4 py-2 border border-[#154d13] self-center hover:border-white hover:text-white hover:bg-[#154d13] transition-colors">
        <a :href=link>{{text}}</a>
    </div>
</template>

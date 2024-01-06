<template>
    <VuePaginate v-model="page" :page-count="20" :page-range="3" :margin-pages="2" :click-handler="clickCallback"
        prev-text="Prev" next-text="Next" container-class="flex bg py-1.5 px-3 bg-stone-200 rounded-md shadow-sm ring-1 ring-stone-600/10 
        font-medium text-stone-500"
        page-class="text-xs px-2 py-0.5 hover:bg-purple-500/20 hover:text-purple-800 rounded-sm cursor-pointer"
        prev-class="px-2 hover:bg-purple-500/20 hover:text-purple-800 rounded-sm cursor-pointer"
        next-class="px-2 hover:bg-purple-500/20 hover:text-purple-800 rounded-sm cursor-pointer"
        active-class="text-purple-800 font-semibold" @update:model-value="page = $event" class="bor" />
</template>

<script setup>
import { VuePaginate } from '@svifty7/vue-paginate';
import { ref } from 'vue';

const page = ref(2);
</script>

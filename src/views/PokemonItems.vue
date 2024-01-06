<template>
    <div class="text-stone-800 shadow-md">
        <div class="items-center flex overflow-visible mt-8 lg:mt-4">
            <span class="text-sm font-semibold mr-2 ">Sort:</span>
            <Listbox></Listbox>
        </div>
        <div class="pokeroot flex flex-col text-base bg-stone-200 lg:-mx-8 lg:p-8 rounded-lg 
             lg:h-[80vh] lg:overflow-y-scroll mt-4">

            <RouterLink v-for="item in pokItems" :key="item.id" class="mt-8 first:mt-0" to="/exercise">
                <div class="flex">
                    <div class="flex">
                        <span class="font-semibold text-base text-stone-800">{{ cleanName(item.name) }}</span>
                        <div
                            class="text-xs ml-1 self-center px-1.5 py-0.5 bg-purple-300/30 text-purple-600 rounded-s font-medium">
                            {{ item.category.name }}</div>
                    </div>
                    <span class="ml-auto self-center px-1.5 py-0.5 text-xs  bg-stone-400/20 text-stone-500 rounded-s ">
                        ${{ item.cost }}</span>
                </div>

                <div class="text-sm text-stone-600 mt-1 tracking-wide">{{ item.effect_entries[0].effect }}</div>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// import { Item } from 'pokenode-ts';
import { useGetItems } from '../composables/usegetitems';
import Listbox from '../components/listbox.vue';

/** @type { Item[] } */
const pokItems = ref([])

useGetItems().then(({ items }) => {
    pokItems.value = items;
});

/** @param {String} name */
function cleanName(name) {
    const capitalized = name.split("-").map((s) => `${s[0].toLocaleUpperCase()}${s.slice(1)}`);
    return capitalized.join(" ");
}
</script>

<style>
::-webkit-scrollbar {
    width: 4px;
    background: #00000000;
}

::-webkit-scrollbar-thumb {
    background: #3131317f;
    -webkit-border-radius: 1ex;
    /* -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75); */
}

.pokeroot {
    scrollbar-gutter: stable;
}
</style>
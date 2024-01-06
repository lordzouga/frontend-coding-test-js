<template>
    <RouterLink v-for="item in pokItems" :key="item.id" class="mt-8 first:mt-0" to="/exercise">
        <div class="flex">
            <div class="flex">
                <span class="font-semibold text-base text-stone-800">{{ cleanName(item.name) }}</span>
                <div class="text-xs ml-1 self-center px-1.5 py-0.5 bg-purple-300/30 text-purple-600 rounded-s font-medium">
                    {{ item.category.name }}
                </div>
            </div>
            <span class="ml-auto self-center px-1.5 py-0.5 text-xs  bg-stone-400/20 text-stone-500 rounded-s ">
                ${{ item.cost }}
            </span>
        </div>

        <div class="text-sm text-stone-600 mt-1 tracking-wide">{{ item.effect_entries[0].effect }}</div>
    </RouterLink>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useGetItems } from '../composables/usegetitems';

/** @type { Item[] } */
const pokItems = ref([])

const { items } = await useGetItems()
pokItems.value = items;

/** @param {String} name */
function cleanName(name) {
    const capitalized = name.split("-").map((s) => `${s[0].toLocaleUpperCase()}${s.slice(1)}`);
    return capitalized.join(" ");
}
</script>
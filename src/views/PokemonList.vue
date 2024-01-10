<template>
    <RouterLink v-for="item in pokItems" :key="item.id" class="-my-4 mb-4 py-4 group 
    hover:bg-stone-300/40 rounded-md lg:-mx-4 px-4" :to="`/exercise/${item.name}`" data-test="item">
        <div class="flex ">
            <div class="flex">
                <span class="font-semibold text-base text-stone-800 group-hover:underline">{{ useCleanName(item.name)
                }}</span>
                <div class="text-xs ml-1 self-center px-1.5 py-0.5 bg-purple-300/30 text-purple-600 rounded font-medium">
                    {{ item.category.name }}
                </div>
            </div>
            <div class="ml-auto self-center px-1.5 py-0.5 text-xs  bg-stone-400/20 text-stone-500 rounded">
                ${{ item.cost.toLocaleString() }}
            </div>
        </div>

        <div class="text-sm text-stone-600 mt-1 tracking-wide">
            {{ item.effect_entries.length ? item.effect_entries[0].effect : 'No Data' }}
        </div>
    </RouterLink>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useGetItems } from '../composables/usegetitems';
import { useState } from '../composables/usestate';
import { useCleanName } from '../composables/usecleanname';

const props = defineProps(["page"]);
const emit = defineEmits(["itemcount", "loading", "loaded"]);

/** @type { Item[] } */
const pokItems = ref([]);
const { state } = useState();

const loadData = async (page) => {
    emit("loading");
    const { items, count } = await useGetItems(page);

    pokItems.value = items;

    emit("itemcount", count);
    emit("loaded")
}

await loadData(props.page);

watch(() => props.page, async (newPage) => {
    await loadData(newPage);
});

watch(() => state.sortMode, async (_new) => {
    await loadData(props.page)
})

</script>
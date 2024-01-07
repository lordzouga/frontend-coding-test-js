<template>
    <div class="flex flex-col">
        <span class="text-lg font-semibold text-stone-800">
            {{ details.name }}
        </span>

        <span class="mt-0.5 font-medium text-sm text-stone-600">
            {{ details.effect_entries.length ? details.effect_entries[0].effect : 'No Data' }}
        </span>

        <div class="flex mt-8">
            <div class="flex flex-col">
                <span class="text-stone-500 text-sm font-medium">
                    Cost
                </span>
                <span class="text-stone-800 font-medium">
                    {{ details.cost }}
                </span>
            </div>
            <div class="flex flex-col ml-8">
                <span class="text-stone-500 text-sm font-medium">
                    Category
                </span>
                <span class="text-stone-800 font-medium">
                    {{ details.category.name }}
                </span>
            </div>
        </div>

        <div class="flex flex-col mt-8">
            <span class="text-stone-500 text-sm font-medium">Attributes</span>
            <span class="text-stone-800 font-medium">
                {{ getAttributes(details.attributes) }}
            </span>
        </div>


    </div>
</template>

<script setup>
import { ref } from 'vue';
// import { Item, ItemAttribute } from 'pokenode-ts';
import { useGetItemDetails } from '../composables/usegetitemdetails';

/** @type { Item } */
const details = ref({});
const props = defineProps(["name"])

const { item } = await useGetItemDetails(props.name);
details.value = item;

function getAttributes(attrs) {
    return attrs.map(({ name }) => name).join(", ");
}
</script>

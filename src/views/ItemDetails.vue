<template>
    <div class="flex flex-col">
        <div>
            <IconArrowNarrowLeft></IconArrowNarrowLeft>
        </div>

        <div class="flex flex-col text-base bg-stone-200 lg:-mx-8 lg:p-8 rounded-lg 
                     lg:h-[75vh] lg:overflow-y-scroll mt-4 lg:shadow-md lg:ring-1 lg:ring-stone-600/10 ">
            {{ details.name }}
        </div>
    </div>
</template>
<script setup>
import { IconArrowLeft, IconArrowNarrowLeft } from '@tabler/icons-vue'
import { ref, reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useGetItemDetails } from '../composables/usegetitemdetails';

const { itemName } = useRoute().params;
const details = ref({})

useGetItemDetails(itemName).then(({ item }) => {
    details.value = item;
})


</script>

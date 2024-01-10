<template>
    <Transition :appear="true" @enter="onEnter">
        <div class="flex flex-col px-4 lg:px-0 pt-4 lg:pt-0">
            <span class="text-lg font-semibold text-stone-800 item-name" data-test="name">
                {{ useCleanName(details.name) }}
            </span>

            <span class="mt-0.5 font-medium text-sm text-stone-600 item-desc">
                {{ details.effect_entries.length ? details.effect_entries[0].effect : 'No Data' }}
            </span>

            <div class="flex mt-8 cost-category">
                <div class="flex flex-col">
                    <span class="text-stone-500 text-sm font-medium">
                        Cost
                    </span>
                    <span class="text-stone-800 font-medium" data-test="cost">
                        {{ details.cost.toLocaleString() }}
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

            <div class="flex flex-col mt-8 attributes">
                <span class="text-stone-500 text-sm font-medium">Attributes</span>
                <span class="text-stone-800 font-medium">
                    {{ details.attributes.length ? getAttributes(details.attributes) : 'No Data' }}
                </span>
            </div>

            <div class="rounded-lg mt-8 bg-stone-100 ring-stone-600/10 
                shadow-[0_0_1px_1px_rgba(0,0,0,0.14)] overflow-x-scroll flavor-table">
                <table class=" w-full table-auto border-collapse p-0 m-0 ">
                    <thead>
                        <tr class="border-b text-sm">
                            <th class="px-4 p-2  font-semibold text-start text-stone-400">Flavor</th>
                            <th class="px-4 p-2  font-semibold text-start text-stone-400">Effect</th>
                        </tr>
                    </thead>

                    <tr v-if="details.flavor_text_entries.length > 0"
                        v-for="flavor in getFlavors(details.flavor_text_entries)" :key="flavor.name"
                        class=" border-b border-stone-200 text-sm">
                        <td class="px-4 p-2 font-medium text-stone-700">{{ useCleanName(flavor.name) }}</td>
                        <td class="px-4 p-2 tracking-wide text-stone-600">{{ flavor.text }}</td>
                    </tr>
                    <tr v-else class="relative flex items-center w-full">
                        <div class="ml-auto mt-2 text-stone-500 font-medium text-sm">No Flavor Data</div>
                    </tr>
                </table>
            </div>

        </div>
    </Transition>
</template>

<script setup>
import { ref } from 'vue';
// import { Item, ItemAttribute } from 'pokenode-ts';
import { useGetItemDetails } from '../composables/usegetitemdetails';
import { useCleanName } from '../composables/usecleanname';
import { gsap } from 'gsap';

/** @type { Item } */
const details = ref({});
const props = defineProps(["name"]);
const emit = defineEmits(["loading", "loaded"])

const onEnter = (el, done) => {
    let targets = [".item-name", ".item-desc", ".cost-category", ".attributes", ".flavor-table"]
    gsap.timeline().from(targets, {
        duration: 0.3,
        opacity: 0,
        y: 40,
        ease: "power3.easeIn",
        stagger: 0.1,
        onComplete: done,
        clearProps: "zIndex,y"
    })
}

emit("loading");
const { item } = await useGetItemDetails(props.name);
details.value = item;

emit("loaded")
/* Show only flavors in english language and also reduce object attributes to make the object easy to use */
/** @param {Array} flavors  */
function getFlavors(flavors) {
    return flavors.filter((flav) => flav.language.name === 'en')
        .map(({ text, version_group }) => { return { text, name: version_group.name } })
}

function getAttributes(attrs) {
    return attrs.map(({ name }) => useCleanName(name)).join(", ");
}
</script>

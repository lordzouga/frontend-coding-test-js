<template>
    <div class="text-stone-800 flex flex-col">
        <div class="items-center flex overflow-visible mt-8 lg:mt-4">
            <span class="text-sm font-semibold mr-2 ">Sort:</span>
            <Listbox @changed="sortChanged"></Listbox>
        </div>

        <Container>

            <KeepAlive>
                <Suspense @resolve="onResolve">
                    <PokemonList :page="page" @itemcount="setPageCount"></PokemonList>
                    <template #fallback>
                        Loading pokemons...
                    </template>
                </Suspense>
            </KeepAlive>
        </Container>

        <VuePaginate v-model="page" :page-count="pageCount" :page-range="3" :margin-pages="2" :click-handler="pageClicked"
            prev-text="Prev" next-text="Next" container-class="flex bg py-1.5 px-1.5 bg-stone-200 rounded-md 
            shadow-sm ring-1 ring-stone-600/10 font-medium text-stone-500"
            page-link-class="text-xs px-2 py-0.5 hover:bg-purple-500/20 hover:text-purple-800 rounded-md cursor-pointer"
            prev-class="px-2 hover:bg-purple-500/20 hover:text-purple-800 rounded-sm cursor-pointer"
            next-class="px-2 hover:bg-purple-500/20 hover:text-purple-800 rounded-sm cursor-pointer"
            active-class="text-purple-800 font-bold" @update:model-value="page = $event" class="mt-4 ml-auto" />
    </div>
</template>

<script setup>
import PokemonList from './PokemonList.vue';
// import { Item } from 'pokenode-ts';
import Listbox from '../components/listbox.vue';
import { VuePaginate } from '@svifty7/vue-paginate';
import { ref } from 'vue';
import Container from '../components/container.vue';
import { useState } from '../composables/usestate';
import { useRoute, useRouter } from 'vue-router';

const page = ref(1);
const pageCount = ref(1);
const LIMIT = 20;

const params = useRoute().params;

if (!params.page) {
    page.value = 1;
} else page.value = params.page;


function setPageCount(count) {
    pageCount.value = (count - (count % LIMIT)) / LIMIT;
}

const { addToast, setSortMode } = useState();

function sortChanged(newSort) {
    setSortMode(newSort.id);
}
/* When data finishes loading, show a toast */
const onResolve = () => addToast({
    title: "Load Successful",
    note: "Loading list of pokemon items was completed successfully"
})

const router = useRouter();

function pageClicked(page) {
    router.push({ path: `${page}` })
    // nextTick(() => )
    // router.push
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
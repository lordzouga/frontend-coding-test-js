<template>
    <div class="text-stone-800 flex flex-col">
        <div class="items-center flex overflow-visible mt-8 lg:mt-4">
            <span class="text-sm font-semibold mr-2 ">Sort:</span>
            <Listbox></Listbox>
        </div>

        <div class="pokeroot flex flex-col text-base bg-stone-200 lg:-mx-8 lg:p-8 rounded-lg 
                     lg:h-[75vh] lg:overflow-y-scroll mt-4 lg:shadow-md lg:ring-1 lg:ring-stone-600/10 ">
            <Suspense>
                <PokemonList></PokemonList>
                <template #fallback>
                    Loading pokemons...
                </template>
            </Suspense>
        </div>
        <pager class="mt-4 ml-auto"></pager>
    </div>
</template>

<script setup>
import PokemonList from './PokemonList.vue';
// import { Item } from 'pokenode-ts';
import Listbox from '../components/listbox.vue';
import pager from '../components/pager.vue';
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
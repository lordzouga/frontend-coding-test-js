<template>
    <div class="lg:bg-stone-400 bg-stone-200 h-screen text-left">
        <nav class="flex px-4 lg:h-14 h-12 lg:px-[400px] font-semibold text-base">
            <h1 class="self-center text-xl"> {{ pageTitle }} </h1>
        </nav>
        <main class="lg:mx-[400px] mx-4">
            <RouterView></RouterView>
        </main>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const pageTitle = ref("Pokemon Items")

</script>

<style></style>
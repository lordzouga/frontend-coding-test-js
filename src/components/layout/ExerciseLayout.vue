<template>
    <div class="lg:bg-stone-300 bg-stone-200 h-screen text-left">
        <nav class="flex px-4 h-12 lg:px-[400px] font-semibold text-base" @click="doAdd">
            <h1 class="self-center text-lg text-stone-800"> {{ pageTitle }} </h1>
        </nav>
        <main class="lg:mx-[400px] mx-4">

            <RouterView v-slot="{ Component }">
                <KeepAlive :exclude="['ItemDetails']">
                    <component :is="Component" />
                </KeepAlive>
            </RouterView>

        </main>
        <toast />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import toast from '../toast.vue';
import { useState } from '../../composables/usestate'


const pageTitle = ref("Pokemon Items")
const { addToast } = useState();

const doAdd = () => {
    addToast({
        title: "Toast Component",
        note: "Awww, a toast to me? How nice!"
    });
}
</script>

<style></style>
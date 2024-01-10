<template>
    <div class="lg:bg-stone-300 bg-stone-200 h-screen text-left font-inter">
        <nav class="flex px-4 h-12 lg:px-[400px] font-semibold text-base">
            <h1 class="self-center text-lg text-stone-800">
                <RouterLink to="/exercise/1">{{ pageTitle }} </RouterLink>
            </h1>
        </nav>
        <main class="lg:mx-[400px] mx-4">
            <RouterView v-slot="{ Component, route }">
                <Transition :appear="true" @enter="onEnter" @leave="onLeave" mode="out-in">
                    <KeepAlive :exclude="['ItemDetails']">
                        <component :is="Component" :key="route.name" />
                    </KeepAlive>
                </Transition>
            </RouterView>
        </main>
        <toast />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import toast from '../toast.vue';
import { useState } from '../../composables/usestate';
import { useRoute } from 'vue-router';
import { gsap } from 'gsap';

const route = useRoute();

const onEnter = (el, done) => {
    let container = "";
    let target = [];

    if (route.name === "PokemonItems") {
        container = ".list-container"
        target = [".listbox", container, ".pager"];
    } else if (route.name === "ItemDetails") {
        container = ".detail-container";
        target = [".back-arrow", container];
    }

    gsap.timeline().from(target, {
        duration: 0.2,
        opacity: 0,
        y: 40,
        ease: "power3.easeOut",
        stagger: 0.1,
        onComplete: done,
        clearProps: "zIndex,y"
    }).set(container, { display: "flex", opacity: 1 })
}

const onLeave = (el, done) => {
    gsap.timeline().to(".root", {
        duration: 0.1,
        opacity: 0,
        y: 40,
        ease: "power3.easeIn",
        stagger: 0.05,
        onComplete: done
    }).set(".root", { opacity: 1, y: 0 })

}

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
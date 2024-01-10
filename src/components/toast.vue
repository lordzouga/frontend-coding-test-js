<template>
    <Teleport to="body">
        <div class="fixed bottom-4 left-4 lg:top-8 lg:right-8 lg:bottom-auto lg:left-auto">
            <div v-for="toast in state.toasts" :key="toast.key">
                <Transition :appear="true" enter-active-class="transform ease-out duration-300 transition"
                    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
                    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0">

                    <div
                        class="flex cursor-pointer bg-stone-50 lg:bg-stone-200 flex-col mt-4 rounded-md shadow-md px-4 
                        py-2 lg:py-4 flex-1 lg:px-8 min-w-[calc(100vw-32px)] max-w-[calc(100vw-32px)] lg:min-w-[20vw] lg:max-w-[20vw] ring-1 ring-stone-600/10">
                        <span class="font-semibold text-stone-700 text-sm">{{ toast.title }}</span>
                        <span class="mt-1 text-sm font-medium text-stone-500">{{ toast.note }} </span>
                    </div>
                </Transition>
            </div>
        </div>

    </Teleport>
</template>

<script setup>
import { useState } from '../composables/usestate';

const { state } = useState();
</script>
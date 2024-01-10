<template>
    <Transition :appear="true">
        <div
            class="flex  relative flex-col text-base bg-stone-200 rounded-lg lg:-mx-8 -mx-4 h-[calc(100vh-120px)]
                         lg:h-[65vh] xl:h-[75vh] mt-8 lg:mt-4 lg:shadow-md lg:ring-1 lg:ring-stone-600/10 main-container">
            <div class="overflow-y-scroll lg:p-8 flex flex-col ">
                <slot></slot>
            </div>

            <Transition :appear="true" enter-active-class="transform ease-out duration-200 transition"
                enter-from-class="opacity-0" enter-to-class="opacity-100">
                <div class="w-full h-full bg-stone-200/70 text-center flex items-center
                     justify-center absolute rounded-lg" v-if="loading" @scroll.stop>
                    <span class="self-center flex text-purple-700">
                        <span class="relative flex h-8 w-8">
                            <span class="rounded-full absolute h-full w-full animate-ping bg-purple-600 opacity-80"></span>
                            <span
                                class="rounded-full relative h-full w-full ring-1 ring-purple-800 shadow-md bg-purple-700"></span>
                        </span>

                        <span class="font-semibold tracking-wider text-xl ml-4"> Loading data...</span>
                    </span>
                </div>
            </Transition>

        </div>
    </Transition>
</template>
<script setup>
defineProps(["loading"])

</script>
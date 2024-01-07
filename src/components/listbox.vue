<template>
    <Listbox v-model="selectedOption">
        <div class="relative">
            <ListboxButton class="flex rounded-md lg:bg-stone-200 bg-stone-100 py-1.5 px-3 shadow-sm text-xs w-[100.76px] ring-stone-600/10 ring-1 font-medium 
                hover:ring-2 hover:ring-offset-1 hover:ring-purple-500">
                {{ selectedOption.name }} <IconSelector class="h-4 w-4 ml-auto text-stone-500"></IconSelector>
            </ListboxButton>

            <transition leave-active-class="transition duration-100 ease-in" leave-from-class="opacity-100"
                leave-to-class="opacity-0">
                <ListboxOptions class="absolute lg:bg-stone-200 bg-stone-100 py-1 rounded-md mt-1 shadow-lg">
                    <ListboxOption v-for="option in options" :key="option.id" :value="option" :disabled="option.unavailable"
                        v-slot="{ active, selected }" class="px-1">
                        <li class="flex select-none py-1.5 pl-10 pr-3 text-xs cursor-default"
                            :class="[active ? 'bg-purple-300/30 text-purple-800 rounded-md font-semibold' : 'text-stone-800']">
                            <span v-if="selected" class="absolute left-0 flex items-center pl-3 text-green-800">
                                <IconCheck class="self-center h-5 w-5"></IconCheck>
                            </span> {{ option.name }}
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>
  
<script setup>
import { ref } from 'vue'
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/vue'
import { IconSelector, IconCheck } from '@tabler/icons-vue'

const options = [
    { id: 1, name: 'Default', unavailable: false },
    { id: 2, name: 'Title', unavailable: false },
]
const selectedOption = ref(options[0])
</script>
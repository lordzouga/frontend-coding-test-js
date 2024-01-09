<template>
    <div class="flex flex-col">
        <div>
            <IconArrowLeft class="text-stone-700 hover:text-purple-700 cursor-pointer" @click="goBack()" />
        </div>

        <Container>
            <KeepAlive>
                <Suspense @resolve="onResolve">
                    <PokemonItem :name="itemName" :key="itemName"></PokemonItem>

                    <template #fallback>
                        Loading item details...
                    </template>
                </Suspense>
            </KeepAlive>
        </Container>
    </div>
</template>
<script setup>
import { IconArrowLeft, IconArrowNarrowLeft } from '@tabler/icons-vue'
import { useRoute, useRouter } from 'vue-router';
// import { Item } from 'pokenode-ts';
import PokemonItem from '../components/PokemonItem.vue'
import Container from '../components/container.vue';
import { useState } from '../composables/usestate';

const { itemName } = useRoute().params;

const router = useRouter();
const goBack = () => router.back();

const { addToast } = useState();

/* Show a toast when data loading is complete */
const onResolve = () => addToast({
    title: `${itemName} Loaded`,
    note: `Data for ${itemName} was loaded successfully`
})
</script>

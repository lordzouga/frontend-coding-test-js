<template>
    <div class="flex flex-col">
        <div>
            <IconArrowLeft class="text-stone-700 hover:text-purple-700 cursor-pointer" @click="goBack()" />
        </div>

        <Container>
            <Suspense>
                <PokemonItem :name="itemName"></PokemonItem>

                <template #fallback>
                    Loading item details...
                </template>
            </Suspense>
        </Container>
    </div>
</template>
<script setup>
import { IconArrowLeft, IconArrowNarrowLeft } from '@tabler/icons-vue'
import { useRoute, useRouter } from 'vue-router';
// import { Item } from 'pokenode-ts';
import PokemonItem from '../components/PokemonItem.vue'
import Container from '../components/container.vue';

const { itemName } = useRoute().params;

const router = useRouter();
const goBack = () => router.go(-1)
</script>

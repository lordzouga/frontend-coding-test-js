<template>
    <div class="flex flex-col">
        <div>
            <IconArrowNarrowLeft></IconArrowNarrowLeft>
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
import { useRoute } from 'vue-router';
// import { Item } from 'pokenode-ts';
import PokemonItem from '../components/PokemonItem.vue'
import Container from '../components/container.vue';

const { itemName } = useRoute().params;

</script>

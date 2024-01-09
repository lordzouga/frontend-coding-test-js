import { defineComponent } from "vue";
import { mount, flushPromises } from "@vue/test-utils";
import { items } from "./staticdata";
import { useGetItems } from "../composables/usegetitems";
import { expect, vi } from 'vitest';

import PokemonList from "../views/PokemonList.vue";

const mock = vi.hoisted(() => {
    return {
        useGetItems: vi.fn()
    }
})

vi.mock('../composables/usegetitems.js', () => ({useGetItems: mock.useGetItems}))

test("that list is rendered", async () => {
    let count = 4;

    vi.mocked(useGetItems).mockResolvedValueOnce({ items, count })

    const TempComponent = defineComponent({
        components: { PokemonList },
        template: '<Suspense><PokemonList :page="1"/></Suspense>'
    });

    const tempWrapper = mount(TempComponent);
    await flushPromises();

    const wrapper = tempWrapper.findComponent(PokemonList);
    
    expect(useGetItems).toHaveBeenCalledOnce();
    const loadedItems = wrapper.findAll('[data-test="item"]');

    expect(loadedItems.length).toBe(count);
})
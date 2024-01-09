import { defineComponent } from "vue";

import { mount, flushPromises } from "@vue/test-utils";
import { items } from "./staticdata";
import { useGetItemDetails } from '../composables/usegetitemdetails'
import { expect, vi } from 'vitest';
import PokemonItem from "../components/PokemonItem.vue"

const mock = vi.hoisted(() => {
    return {
        useGetItemDetails: vi.fn()
    }
})

vi.mock('../composables/usegetitemdetails.js', () => ({ useGetItemDetails: mock.useGetItemDetails }))

test("that pokemon item is rendered with the right values ", async () => {
    
    vi.mocked(useGetItemDetails).mockResolvedValueOnce({ item: items[0]} );

    const TempComponent = defineComponent({
        components: { PokemonItem },
        template: '<Suspense><PokemonItem name="paralyze-heal"/></Suspense>'
    });

    const tempWrapper = mount(TempComponent);
    await flushPromises();

    const wrapper = tempWrapper.findComponent(PokemonItem);
    const nameWrap = wrapper.find('[data-test="name"]');
    const costWrap = wrapper.find('[data-test="cost"]');

    expect(useGetItemDetails).toHaveBeenCalledOnce();

    expect(nameWrap.text()).toBe("Paralyze Heal");
    expect(costWrap.text()).toBe("200");
})
import { MainClient } from 'pokenode-ts';
import { useState } from './usestate';

const LIMIT = 20;
const DEFAULT = 1;
const TITLE = 2;

export const useGetItems = async (page) => {
    const api = new MainClient();

    const { results, count } = await api.item.listItems((page - 1) * LIMIT, LIMIT);

    const items = await Promise.all(results.map(async ( { name } ) => {
        return await api.item.getItemByName(name);
    }));

    const { state } = useState();


    if (state.sortMode == TITLE) {
        items.sort((a, b) => {
            if (a.name < b.name) return -1;
            else if (a.name > b.name) return 1;
            else return 0;
        });
    }


    return { items, count }
}
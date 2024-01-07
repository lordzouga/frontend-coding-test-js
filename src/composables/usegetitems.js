import { MainClient } from 'pokenode-ts';

const LIMIT = 20;

export const useGetItems = async (page) => {
    const api = new MainClient();

    const { results, count } = await api.item.listItems((page - 1) * LIMIT, LIMIT);

    const items = await Promise.all(results.map(async ( { name } ) => {
        return await api.item.getItemByName(name);
    }));

    return { items, count }
}
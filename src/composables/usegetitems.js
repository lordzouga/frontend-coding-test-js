import { MainClient } from 'pokenode-ts';

export const useGetItems = async () => {
    const api = new MainClient();

    const { results } = await api.item.listItems();

    console.log(await api.item.listItemCategories(20));

    const items = await Promise.all(results.map(async ( { name, url } ) => {
        return await api.item.getItemByName(name);
    }))
    
    return { items }
}
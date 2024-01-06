import { MainClient } from 'pokenode-ts';

export const useGetItems = async () => {
    const api = new MainClient();

    const { results } = await api.item.listItems();

    const items = await Promise.all(results.map(async ( { name, url } ) => {
        return await api.item.getItemByName(name);
    }));
    
    return { items }
}
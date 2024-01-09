import { MainClient } from 'pokenode-ts';

/** @param {String} name */
export const useGetItemDetails = async (name) => {
    const api = new MainClient();

    const item = await api.item.getItemByName(name);
    return { item };
}
import axios from 'axios';

import { IData, IHouse } from './types';

const url = 'https://my-json-server.typicode.com/mok-im/json-server/houses';

export const getHouseByAPI = async (): Promise<IData> => {
    try {
        const { data } = await axios.get<IData>(url);
        return data;
    } catch (e) {
        throw new Error(e);
    }
};

export const getHouseById = async (args: number): Promise<IHouse> => {
    try {
        const { data } = await axios.get<IHouse>(url, { params: { id: args } });
        return data;
    } catch (e) {
        throw new Error(e);
    }
};

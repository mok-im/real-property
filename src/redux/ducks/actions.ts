import { HouseActionTypes } from '../../types';

export const setHouses = (payload: any[]) => ({
    type: HouseActionTypes.SET_HOUSES,
    payload,
});
export const fetchHouses = () => ({ type: HouseActionTypes.FETCH_HOUSES });

export const fetchOneHouse = (args: number) => ({
    type: HouseActionTypes.FETCH_ONE_HOUSE,
    args: args,
});

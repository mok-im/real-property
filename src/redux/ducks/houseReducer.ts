import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';

import { HouseActionTypes, HouseAction, HouseState } from '../../types';

const initialState: HouseState = {
    houses: [],
    house: [],
    loading: true,
};

export default function houseReducer(
    state = initialState,
    action: HouseAction
): HouseState {
    switch (action.type) {
        case HouseActionTypes.SET_HOUSES:
            return { ...state, houses: action.payload, loading: false };
        case HouseActionTypes.SET_ONE_HOUSE:
            return { ...state, house: action.payload, loading: true };
        default:
            return state;
    }
}

export const setHouses = (payload: any[]) => ({
    type: HouseActionTypes.SET_HOUSES,
    payload,
});

export const setOneHouse = (payload: any[]) => ({
    type: HouseActionTypes.SET_ONE_HOUSE,
    payload,
});

export const fetchHouses = () => ({ type: HouseActionTypes.FETCH_HOUSES });

export const fetchOneHouse = (args: number) => ({
    type: HouseActionTypes.FETCH_ONE_HOUSE,
    args: args,
});

const url = 'https://my-json-server.typicode.com/mok-im/json-server/houses';

function* workerLoadData() {
    try {
        const { data } = yield call(axios.get, url);
        yield put(setHouses(data));
    } catch (e) {
        throw new Error(e);
    }
}

function* workerLoadOne({ args }: any) {
    try {
        const { data } = yield call(axios.get, url, { params: { id: args } });
        yield put(setOneHouse(data));
    } catch (e) {
        throw new Error(e);
    }
}

export function* watchLoadData() {
    yield takeEvery(HouseActionTypes.FETCH_HOUSES, workerLoadData);
    yield takeEvery(HouseActionTypes.FETCH_ONE_HOUSE, workerLoadOne);
}

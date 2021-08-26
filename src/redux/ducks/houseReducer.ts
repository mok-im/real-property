import { put, takeEvery, call } from 'redux-saga/effects';

import { HouseActionTypes, HouseAction, HouseState } from '../../types';
import { getHouseByAPI, getHouseById } from '../../api';

// Reducer
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

// Action Creators
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

// Side effects, Saga
function* workerLoadData() {
    const data: any[] = yield call(getHouseByAPI);
    yield put(setHouses(data));
}

function* workerLoadOne({ args }: any) {
    const data: any[] = yield call(getHouseById, args);
    yield put(setOneHouse(data));
}

export function* watchLoadData() {
    yield takeEvery(HouseActionTypes.FETCH_HOUSES, workerLoadData);
    yield takeEvery(HouseActionTypes.FETCH_ONE_HOUSE, workerLoadOne);
}

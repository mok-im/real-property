import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';

import { HouseActionTypes } from '../../types';
import { setHouses, setOneHouse } from './actions';

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

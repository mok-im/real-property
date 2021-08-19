import { put, takeEvery, call } from 'redux-saga/effects';
import { HouseActionTypes } from '../../types';
import { setHouses } from './actions';
import axios from 'axios';

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

        yield put(setHouses(data));
    } catch (e) {
        throw new Error(e);
    }
}

export function* watchLoadData() {
    yield takeEvery(HouseActionTypes.FETCH_HOUSES, workerLoadData);
    yield takeEvery(HouseActionTypes.FETCH_ONE_HOUSE, workerLoadOne);
}

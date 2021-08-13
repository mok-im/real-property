import { put, takeEvery, call } from "redux-saga/effects";
import { FETCH_HOUSES, FETCH_ONE_HOUSE, setHouses } from "./module/reducer";
import axios from 'axios';

const url = "https://my-json-server.typicode.com/mok-im/json-server/houses";

function* workerLoadData() {
    try {
        const { data } = yield call(axios.get, url);
        yield put(setHouses(data));
    } catch (e) {
        throw new Error(e);
    };
};

function* workerLoadOne({ args }) {
    try {
        const { data } = yield call(axios.get, url, { params: { id: args } });
        yield put(setHouses(data));
    } catch (e) {
        throw new Error(e);
    };
};

export function* watchLoadData() {
    yield takeEvery(FETCH_HOUSES, workerLoadData);
    yield takeEvery(FETCH_ONE_HOUSE, workerLoadOne);
};
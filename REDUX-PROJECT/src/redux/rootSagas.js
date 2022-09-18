import axios from "axios";
import {put, takeEvery} from 'redux-saga/effects'
import { FETCH_ALL_POST_REQUEST, onFetchAllPostSuccess } from './actions';

function* getAllPostSaga() {
console.log('SAGA---------1')
    const data = yield axios('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
    }).then((response) => {
        return response.data;
    }).catch((error) => {
        alert('ERROR in fetching POST');
    })

  yield  put(onFetchAllPostSuccess(data));

}


export function* watcherSaga() {
    yield takeEvery(FETCH_ALL_POST_REQUEST, getAllPostSaga);
}
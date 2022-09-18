
import { takeEvery, put } from 'redux-saga/effects';
import { FETCH_ALL_PRODUCTS_REQUEST, onFetchProductListSuccess } from '../actions';
import { fetchAllProducts } from '../../service';

export function* fetchAlProductsWorkerSaga() {
    const productList = yield fetchAllProducts();

    yield put(onFetchProductListSuccess(productList));
};

export function* fetchAllProductsWatcherSaga() {
    yield takeEvery(FETCH_ALL_PRODUCTS_REQUEST, fetchAlProductsWorkerSaga);
};
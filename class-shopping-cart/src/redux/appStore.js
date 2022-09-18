import {createStore, combineReducers, applyMiddleware} from 'redux';
import {productReducer, productCartReducer} from './reducer';
import createSagaMiddleware from 'redux-saga';
import {fetchAllProductsWatcherSaga, onFetchProductListRequest} from '../redux';


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    productStore: productReducer,
    cartStore: productCartReducer
});

const appStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchAllProductsWatcherSaga);

appStore.dispatch(onFetchProductListRequest())
export {appStore};
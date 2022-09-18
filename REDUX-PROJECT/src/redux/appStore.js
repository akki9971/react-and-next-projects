
// for redux we need redux and react-redux package

// Step 1- create redux store

import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
import {watcherSaga} from './rootSagas';
import createSagaMiddleware from 'redux-saga';

const mySagaMiddleware = createSagaMiddleware();

export const appStore = createStore(rootReducer, applyMiddleware(mySagaMiddleware))// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

mySagaMiddleware.run(watcherSaga);
import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";

import tabReducer from "./tab/slice";
import tabSaga from "./tab/sagas";
import marketReducer from "./market/slice";
import marketSaga from "./market/sagas";
import modelReducer from "./model/slice";

function* rootSaga() {
  yield fork(tabSaga);
  yield fork(marketSaga);
}

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  tabs: tabReducer,
  market: marketReducer,
  model: modelReducer,
});

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

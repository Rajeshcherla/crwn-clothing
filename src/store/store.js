import {
    compose,
    legacy_createStore as createStore,
    applyMiddleware,
} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from "./root-reducer";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "root",
    storage: storage,
    whiteList: ['cart'],
    blackList:['user']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [
    process.env.NODE_ENV !== "production" && logger,
    sagaMiddleware
].filter(Boolean);

let composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composeEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

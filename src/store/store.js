import { compose, legacy_createStore as createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";

const loggerMiddleWare = (store) => (next) => (action) => {
    if (!action.type) {
        return next(action);
    }

    console.log('type', action.type);
    console.log('payload', action.payload);
    console.log('current state', store.getState());

    next(action);

    console.log('next state', store.getState());
}

const middlewares = [loggerMiddleWare];

const composeEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composeEnhancers);

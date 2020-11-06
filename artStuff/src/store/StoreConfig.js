import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import Reducers from "./Reducers";

const composeEnhancers = compose;

const preloadState = {
};

const StoreConfig = () => { 
    const store = createStore(Reducers, preloadState, composeEnhancers(
        applyMiddleware(thunk),
    ));

    return store;
}

export default StoreConfig; 
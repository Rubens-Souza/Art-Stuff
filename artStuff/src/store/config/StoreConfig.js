import { createStore, combineReducers } from "redux";
import UserReducer from "../reducers/UserReducer";

const Reducers = combineReducers({
    user: UserReducer,
});

const StoreConfig = () => {
    return createStore(Reducers);
};

export default StoreConfig;
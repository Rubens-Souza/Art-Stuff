import { combineReducers } from "redux";
import UserReducer from "../redux/User/UserReducer";

import PostReducer from "../features/Feed/redux/PostReducer";

const Reducers = combineReducers({
    UserReducer,
    PostReducer,
});

export default Reducers;
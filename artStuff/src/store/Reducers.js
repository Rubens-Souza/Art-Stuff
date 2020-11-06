import { combineReducers } from "redux";
import UserReducer from "../redux/User/UserReducer";

import PostReducer from "../redux/Post/PostReducer";

const Reducers = combineReducers({
    UserReducer,
    PostReducer,
});

export default Reducers;
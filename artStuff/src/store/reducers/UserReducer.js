import { EmptyString } from "../../shared/utils/functions/StringUtils";
import { UserActions } from "../constants/ActionTypes";

import UserData from "../../shared/dtos/UserData";

const InitialState = UserData.EmptyUser;

const UserReducer = (state = InitialState, action) => {
    switch (action.type) {

        case (UserActions.user_logged_in):
            const userLoginData = {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
            };
        return userLoginData;

        case (UserActions.user_logged_out):
            const userLogoutData = {
                ...state,
                name: EmptyString,
                email: EmptyString,
            };
        return userLogoutData;

        default: return state;
    }
};

export default UserReducer;
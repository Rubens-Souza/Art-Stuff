import { USER_LOG_IN, USER_LOG_OUT } from "./UserActions";
import UserData from "../../shared/dtos/UserData";

const INITIAL_STATE = {
    userData: UserData.EmptyUser
};

const UserReducer = (state = INITIAL_STATE, action) => {
    if (!action) {
        return state;
    }

    switch (action.type) {
        case (USER_LOG_IN): {
            return {
                ...state,
                userData: action.payload.user,
            };
        }

        case (USER_LOG_OUT): {
            return {
                ...state,
                userData: UserData.EmptyUser,
            };
        }

        default: {
            return state;
        }
    }
};

export default UserReducer;
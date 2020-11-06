import { USER_LOG_IN, USER_LOG_OUT } from "./UserActions";
import { EmptyString } from "../../shared/utils/functions/StringUtils";

// TODO: Test if you can just pass the UserData class inside the objects literals

const INITIAL_STATE = {
    nickName: EmptyString,
    email: EmptyString,
};

const UserReducer = (state = INITIAL_STATE, action) => {
    if (!action) {
        return;
    }

    switch (action.type) {
        case (USER_LOG_IN): {
            return {
                ...state,
                nickName: action.payload.nickName,
                email: action.payload.email,
            };
        }

        case (USER_LOG_OUT): {
            return {
                ...state,
                nickName: EmptyString,
                email: EmptyString,
            };
        }

        default: {
            return state;
        }
    }
};

export default UserReducer;
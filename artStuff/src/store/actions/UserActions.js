import { UserActions } from "../constants/ActionTypes";
import Action from "../dtos/Action";

export const loginAction = (user) => {
    return new Action(UserActions.user_logged_in, user);
};

export const logoutAction = () => {
    return new Action(UserActions.user_logged_out);
};
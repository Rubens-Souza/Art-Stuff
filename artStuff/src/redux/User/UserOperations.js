import { login, logout } from "./UserActions";

export const loginUser = (user) => (dispatch) => {
    return dispatch(login(user));
};

export const logoutActiveUser = () => (dispatch) => {
    return dispatch(logout());
};
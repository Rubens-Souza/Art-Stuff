import { login, logout } from "./UserActions";

export const handleLogin = (user) => (dispatch) => {
    return dispatch(login(user));
};

export const handleLogout = () => (dispatch) => {
    return dispatch(logout());
};
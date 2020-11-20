import {
    login,
    logout,
} from "./UserActions";

import {
    isEmailValid,
    isNickNameValid,
    isPasswordValid,
} from "../../shared/utils/functions/UserValidations";

import UserService from "./UserService";

export const loginUser = (userData, password) => (dispatch) => { // TODO: Make async
    if (!isEmailValid(userData.email) || !isPasswordValid(password) || !UserService.isPasswordCorrect(password)) {
        return;   // TODO: Throw error
    }
    
    userData.nickName = UserService.getUserNickName(userData.email);
    return dispatch(login(userData));
};

export const logoutActiveUser = () => (dispatch) => {
    return dispatch(logout());
};

export const registerUser = (userData, userPassword) => (dispatch) => { // TODO: Make async
    if (!isEmailValid(userData.email) || !isNickNameValid(userData.nickName) || !isPasswordValid(userPassword)) {
        return; // TODO: Throw error
    }

    UserService.registerUserData(userData, userPassword);
    return dispatch(login(userData));
};

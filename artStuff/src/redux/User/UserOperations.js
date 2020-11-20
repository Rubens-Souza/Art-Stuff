import {
    login,
    logout,
} from "./UserActions";

import {
    isEmailValid,
    isNickNameValid,
    isPasswordValid,
} from "../../shared/utils/functions/UserValidations";

import {
    isPasswordCorrect,
} from "./UserService";

export const loginUser = (userData, password) => (dispatch) => { // TODO: Make async
    if (!isEmailValid(userData.email) || !isPasswordValid(password) || !isPasswordCorrect(password)) {
        return;   // TODO: Throw error
    }

    return dispatch(login(userData));
};

export const logoutActiveUser = () => (dispatch) => {
    return dispatch(logout());
};

const registerLoginData = (userData, userPassword) => {
    // TODO: Save login data in Firebase
};

export const registerUser = (userData, userPassword) => (dispatch) => { // TODO: Make async
    if (!isEmailValid(userData.email) || !isNickNameValid(userData.nickName) || !isPasswordValid(userPassword)) {
        return; // TODO: Throw error
    }

    registerLoginData(userData, userPassword);

    return dispatch(login(userData));
};

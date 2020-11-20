import {
    emailRegexPattern,
    passwordRegexPattern,
    specialCharactersExceptUnderscoreRegexPattern,
} from "../constants/RegexPatterns";

import { isStringBlank } from "./StringUtils";

export const isEmailValid = (email) => {
    const stringEmail = String(email);
    const isEmailBlank = isStringBlank(stringEmail);
    const emailMathcesPattern = emailRegexPattern.test(stringEmail.toLocaleLowerCase());

    return !isEmailBlank && emailMathcesPattern;
};

export const isPasswordValid = (password) => {
    const passwordString = String(password);
    const isPasswordBlank = isStringBlank(passwordString);
    const passwordMathcesPattern = passwordRegexPattern.test(passwordString);

    return !isPasswordBlank && passwordMathcesPattern;
};

export const isNickNameValid = (nickname) => {
    const nickNameString = String(nickname);
    const isNickNameBlank = isStringBlank(nickNameString);
    const nickNameMathcesPattern = specialCharactersExceptUnderscoreRegexPattern.test(nickNameString);

    return !isNickNameBlank && nickNameMathcesPattern;
};

import {
    isEmailValid,
    isNickNameValid,
    isPasswordValid,
} from "../../../src/shared/utils/functions/UserValidations";

describe("Testing isEmailValid", () => {
    it("Return true if the email is in the correct format", () => {
        const validEmail = "email@gmail.com";

        const result = isEmailValid(validEmail);

        expect(result).toStrictEqual(true);
    });

    it("Return false if the email is a empty string", () => {
        const invalidEmail = "";

        const result = isEmailValid(invalidEmail);

        expect(result).toStrictEqual(false);
    });

    it("Return false if the email doesn't have valid domain", () => {
        const invalidEmail = "email.com";

        const result = isEmailValid(invalidEmail);

        expect(result).toStrictEqual(false);
    });
});

describe('Testing isPasswordValid', () => {
    it("Return true if the password has the right format", () => {
        const validPassword = "senha-Top_T0p";

        const result = isPasswordValid(validPassword);

        expect(result).toStrictEqual(true);
    });

    it("Return false if the password doesn't have an upper case character", () => {
        const invalidPassword = "senha_password_2";

        const result = isPasswordValid(invalidPassword);

        expect(result).toStrictEqual(false);
    });

    it("Return false if the password doesn't have an lower case character", () => {
        const invalidPassword = "FUS_RO_D4H";

        const result = isPasswordValid(invalidPassword);

        expect(result).toStrictEqual(false);
    });

    it("Return false if the password doesn't have an number", () => {
        const invalidPassword = "i_HATE_math";

        const result = isPasswordValid(invalidPassword);

        expect(result).toStrictEqual(false);
    });

    it("Return false if the password doens't have any letters", () => {
        const invalidPassword = "12345_67890";

        const result = isPasswordValid(invalidPassword);

        expect(result).toStrictEqual(false);
    });

    it("Return flase if the password is a empty string", () => {
        const invalidPassword = "";

        const result = isPasswordValid(invalidPassword);

        expect(result).toStrictEqual(false);
    });

    it("Return false if the password is smaller then 8 characters", () => {
        const invalidPassword = "senha_2";

        const result = isPasswordValid(invalidPassword);

        expect(result).toStrictEqual(false);
    });

    it("Return false if the password is greater then 15 characters", () => {
        const invalidPassword = "ASDF_2134554_QWERTZXC@POIIUYYER-ASDF_2134554_QWERTZXC@POIIUYYER";

        const result = isPasswordValid(invalidPassword);

        expect(result).toStrictEqual(false);
    });
});

describe('Testing isNickNameValid', () => {
    it("Return true if the nick name has the right format", () => {
        const validNickName = "Super_User.As 2";

        const result = isNickNameValid(validNickName);

        expect(result).toStrictEqual(true);
    });

    it("Return false if the nick name is a empty string", () => {
        const invalidNickName = "";

        const result = isNickNameValid(invalidNickName);

        expect(result).toStrictEqual(false);
    });

    it("Return false if the nick has a special character except for '_'", () => {
        const invalidNickName = "I'am@this#app";

        const result = isNickNameValid(invalidNickName);

        expect(result).toStrictEqual(false);
    });
});

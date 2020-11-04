import React, { useState } from "react";

import {
    StyledLoginSafeAreaView,
    StyledTextInputView,
    StyledTextInputLabel,
    StyledTextInput,
    StyledButtonsView,
    StyledBlackButton,
    StyledGhostBlackButton,
    StyledBlackButtonText,
    StyledGhostBlackButtonText,
    StyledAppTitle,
    StyledBackgroundImage,
    StyledAppLogo,
    StyledTitleView
} from "./styles";

import { HomeNavigatorScreenData } from "../HomeNavigator/HomeNavigator";

import Icons from "../../shared/utils/constants/Icons";
import ScreenData from "../../shared/dtos/ScreenData";

import CoverPathLessTraveled from "../../../assets/imgs/Author-Yuumei-Path-Less-Traveled.jpg";

const BackgroundCovers = [
    CoverPathLessTraveled,
];

const Login = ({
    navigation
}) => {

    const [emailInputValue, setEmailInputValue] = useState();
    const [passwordInputValue, setPasswordInputValue] = useState();


    const handleEmailChange = (text) => {
        setEmailInputValue(text);
    };

    const handlePasswordChange = (text) => {
        setPasswordInputValue(text);
    };

    const handleLogin = () => {
        navigation.navigate(HomeNavigatorScreenData.name);
    };

    const handleCreateAccount = () => {

    };

    return (
        <StyledBackgroundImage source={BackgroundCovers[0]}>
            <StyledLoginSafeAreaView>

                <StyledTitleView>
                    <StyledAppLogo source={Icons.FavIcon} />

                    <StyledAppTitle>
                        Art Stuff
                    </StyledAppTitle>
                </StyledTitleView>

                <StyledTextInputView>
                    <StyledTextInputLabel>
                        Email
                    </StyledTextInputLabel>
                    <StyledTextInput
                        keyboardType="email-address"
                        placeholder={"Type your email"}
                        value={emailInputValue}
                        onChange={handleEmailChange}
                    />
                </StyledTextInputView>

                <StyledTextInputView>
                    <StyledTextInputLabel>
                        Password
                    </StyledTextInputLabel>
                    <StyledTextInput
                        keyboardType="visible-password"
                        placeholder={"Type your password"}
                        value={passwordInputValue}
                        onChange={handlePasswordChange}
                    />
                </StyledTextInputView>

                <StyledButtonsView>
                    <StyledBlackButton>
                        <StyledBlackButtonText onPress={handleLogin}>
                            Login
                        </StyledBlackButtonText>
                    </StyledBlackButton>

                    <StyledGhostBlackButton>
                        <StyledGhostBlackButtonText onPress={handleCreateAccount}>
                            Create Account
                        </StyledGhostBlackButtonText>
                    </StyledGhostBlackButton>
                </StyledButtonsView>

            </StyledLoginSafeAreaView>
        </StyledBackgroundImage>
    );
};

export const LoginScreenData = new ScreenData("Login");
export default Login;
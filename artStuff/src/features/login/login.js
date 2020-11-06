import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";

import { loginUser } from "../../redux/User/UserOperations";

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

import { HomeNavigatorScreenData } from "../Navigators/HomeNavigator/HomeNavigator";
import { CreateAccoutScreenData } from "../CreateAccount/CreateAccount";

import Icons from "../../shared/utils/constants/Icons";
import { EmptyString } from "../../shared/utils/functions/StringUtils";

import ScreenData from "../../shared/dtos/ScreenData";
import UserData from "../../shared/dtos/UserData";

import CoverPathLessTraveled from "../../../assets/imgs/Author-Yuumei-Path-Less-Traveled.jpg";

const BackgroundCovers = [
    CoverPathLessTraveled,
];

const Login = ({
    navigation,
    onLogin,
}) => {

    const [emailInputValue, setEmailInputValue] = useState(EmptyString);
    const [passwordInputValue, setPasswordInputValue] = useState(EmptyString);
    const [nickName] = useState("Reizer");

    const handleEmailChange = (text) => {
        setEmailInputValue(text);
    };

    const handlePasswordChange = (text) => {
        setPasswordInputValue(text);
    };

    const handleLogin = () => {
        const userData = new UserData(emailInputValue, nickName);
        onLogin(userData);
        
        navigation.navigate(HomeNavigatorScreenData.name);
    };

    const handleCreateAccount = () => {
        navigation.navigate(CreateAccoutScreenData.name);
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
                        onChangeText={handleEmailChange}
                    />
                </StyledTextInputView>

                <StyledTextInputView>
                    <StyledTextInputLabel>
                        Password
                    </StyledTextInputLabel>
                    <StyledTextInput
                        secureTextEntry={true}
                        keyboardType="visible-password"
                        placeholder={"Type your password"}
                        value={passwordInputValue}
                        onChangeText={handlePasswordChange}
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

Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

const mapStateToProps = null;

const mapDispatchToProps = {
    onLogin: loginUser,
};

const connectToRedux = compose(connect(mapStateToProps, mapDispatchToProps));

export const LoginScreenData = new ScreenData(Login.name);
export default connectToRedux(Login);
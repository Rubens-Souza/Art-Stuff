import React, { useState } from "react";

import {
    StyledBackgroundImage,
    StyledBlackButton,
    StyledCreateAccountVew,
    StyledTextInput,
    StyledTextInputLabel,
    StyledTextInputView,
    StyledBlackButtonText,
    StyledGhostBlackButton,
    StyledGhostBlackButtonText,
    StyledButtonsView,
    StyledAppLogo,
    StyledAppTitle,
    StyledTitleView,
} from "./styles";

import { LoginScreenData } from "../Login/Login";

import Icons from "../../shared/utils/constants/Icons";
import { EmptyString } from "../../shared/utils/functions/StringUtils";
import ScreenData from "../../shared/dtos/ScreenData";

import CoverPathLessTraveled from "../../../assets/imgs/Author-Yuumei-Path-Less-Traveled.jpg";

const BackgroundCovers = [
    CoverPathLessTraveled,
];

const CreateAccount = ({
    navigation
}) => {

    const [userNameInputValue, setUserInputName] = useState(EmptyString);
    const [emailInputValue, setEmailInputValue] = useState(EmptyString);
    const [passwordInputVale, setPasswordInputValue] = useState(EmptyString);

    const handelUserNameChange = (text) => {
        setUserInputName(text);
    };

    const handleEmailChange = (text) => {
        setEmailInputValue(text);
    };

    const handlePasswordChange = (text) => {
        setPasswordInputValue(text);
    };

    const handleRegister = () => {

    };

    const handleCancel = () => {
        navigation.navigate(LoginScreenData.name);
    };

    return (
        <StyledBackgroundImage source={BackgroundCovers[0]}>
            <StyledCreateAccountVew>

                <StyledTitleView>
                    <StyledAppLogo source={Icons.FavIcon} />

                    <StyledAppTitle>
                        Art Stuff
                    </StyledAppTitle>
                </StyledTitleView>

                <StyledTextInputView>

                    <StyledTextInputLabel>
                        User Name
                    </StyledTextInputLabel>
                    <StyledTextInput 
                        placeholder={"Type your user name"}
                        value={userNameInputValue}
                        onChangeText={handelUserNameChange}
                    />
                </StyledTextInputView>

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
                        value={passwordInputVale}
                        onChangeText={handlePasswordChange}
                    />
                </StyledTextInputView>

                <StyledButtonsView>
                    
                    <StyledBlackButton>
                        <StyledBlackButtonText onPress={handleRegister}>
                            Register
                        </StyledBlackButtonText>
                    </StyledBlackButton>

                    <StyledGhostBlackButton>
                        <StyledGhostBlackButtonText onPress={handleCancel}>
                            Cancel
                        </StyledGhostBlackButtonText>
                    </StyledGhostBlackButton>
                </StyledButtonsView>

            </StyledCreateAccountVew>
        </StyledBackgroundImage>
    );
};

export const CreateAccoutScreenData = new ScreenData(CreateAccount.name);
export default CreateAccount;
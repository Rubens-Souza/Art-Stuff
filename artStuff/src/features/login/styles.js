import styled from "styled-components/native";

import {
    DefaultStyledTitle,
    DefaultStyledTextInput,
    DefaultStyledText,
    DefaultBlackButton,
    DefaultBlackButtonText,
    DefaultGhostBlackButton,
    DefaultGhostButtonText,
} from "../../shared/components/CommunStyles/CommunStyles";

import Colors from "../../shared/utils/constants/Colors";

export const StyledTitleView = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const StyledAppLogo = styled.Image`
    height: 72px;
    width: 72px;
    margin-right: 12px;
`;

export const StyledAppTitle = styled(DefaultStyledTitle)`
    font-size: 51px;
`;

export const StyledBackgroundImage = styled.ImageBackground`
    height: 100%;
    width: 100%;
    resize-mode: cover;
`;

export const StyledLoginSafeAreaView = styled.SafeAreaView`
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${Colors.SnowWhite + "ac"};
`;

export const StyledTextInputView = styled.View`
    width: 81%;
`;

export const StyledTextInput = styled(DefaultStyledTextInput)`
`;

export const StyledTextInputLabel = styled(DefaultStyledText)`
    font-size: 18px;
`;

export const StyledButtonsView = styled.View`
    flex-direction: row;
`;

export const StyledBlackButton = styled(DefaultBlackButton)`
    width: 30%;
    margin-right: 6px;
`;

export const StyledBlackButtonText = styled(DefaultBlackButtonText)`
`;

export const StyledGhostBlackButton = styled(DefaultGhostBlackButton)`
    width: 30%;
`;

export const StyledGhostBlackButtonText = styled(DefaultGhostButtonText)`
`;
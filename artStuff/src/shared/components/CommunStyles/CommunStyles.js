import styled from "styled-components/native";

import { Dimensions } from "react-native";

import Fonts from "../../utils/constants/Fonts";
import Colors from "../../utils/constants/Colors";

export const getWindowWidth = () => {
    return Dimensions.get("window").width;
};

export const getWindowHeight = () => {
    return Dimensions.get("window").height;
};

export const DefaultStyledTitle = styled.Text`
    font-family: ${Fonts.Logo};
    color: ${Colors.Black};
`;

export const DefaultStyledText = styled.Text`
    font-family: ${Fonts.Main};
    color: ${Colors.Black};
`;

export const DefaultStyledTextInput = styled.TextInput`
    width: 100%;
    padding: 3px;
    font-size: 14px;
    border-bottom-color: ${Colors.Black};
    border-bottom-width: 1px;
`;

export const DefaultButton = styled.TouchableOpacity`
    padding: 6px 9px; 
    border-radius: 3px;
    width: 45%;
`;

export const DefaultGhostBlackButton = styled(DefaultButton)`
    border-width: 1px;
    border-color: ${Colors.Black};
    background-color: transparent;
`;

export const DefaultBlackButton = styled(DefaultButton)`
    border-color: ${Colors.Black};
    background-color: ${Colors.Black};
`;

export const DefaultWhiteButton = styled(DefaultButton)`
    border-color: ${Colors.White};
    background-color: ${Colors.White};
`;

export const DefaultButtonText = styled.Text`
    text-align: center;
`;

export const DefaultBlackButtonText = styled(DefaultButtonText)`
    color: ${Colors.White};
`;

export const DefaultWhiteButtonText = styled(DefaultButtonText)`
    color: ${Colors.Black};
`;

export const DefaultGhostButtonText = styled(DefaultButtonText)`
    color: ${Colors.Black};
`;
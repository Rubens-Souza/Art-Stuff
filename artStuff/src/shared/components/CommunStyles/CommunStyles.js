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
    color: ${Colors.Withe};
`;

export const DefaultStyledText = styled.Text`
    font-family: ${Fonts.Main};
    color: ${Colors.Withe};
`;
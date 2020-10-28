import styled from "styled-components/native";

import { Gravatar } from "react-native-gravatar";

import Colors from "../../utils/constants/Colors";

import {
    DefaultStyledText
} from "../CommunStyles/CommunStyles";

export const StyledAuthorView = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 3px 9px;
`;

export const StyledAuthorImage = styled(Gravatar)`
    height: 39px;
    width: 39px;
    margin-right: 9px;
`;

export const StyledTextView = styled.View`
    flex-direction: column;
    justify-content: space-evenly;
`;

export const StyledAuthorName = styled(DefaultStyledText)`
    font-size: 18px;
`;

export const StyledSubText = styled(DefaultStyledText)`
    color: ${Colors.Gray};
    font-size: 15px;
    font-style: italic;
`;
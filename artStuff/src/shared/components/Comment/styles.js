import styled from "styled-components/native";

import {
    DefaultStyledText
} from "../CommunStyles/CommunStyles";

import { Gravatar } from "react-native-gravatar";

import Colors from "../../utils/constants/Colors";

export const StyledCommentView = styled.View`
    flex-direction: row;
    width: 90%;
    margin: 6px 4px;
    padding: 3px 6px;
    border-left-color: ${Colors.LightBlack};
    border-left-width: 2px;
`;
export const StyledCommentAuthorImage = styled(Gravatar)`
    height: 33px;
    width: 33px;
    margin-right: 6px;
    border-radius: 3px;
`;

export const StyledCommentTextView = styled.View``;

export const StyledCommentAuthorName = styled(DefaultStyledText)`
    font-size: 14px;
    margin-bottom: 1px;
    margin-top: -3px;
    font-weight: bold;
`;

export const StyledCommentText = styled(DefaultStyledText)`
    font-size: 13px;
`;
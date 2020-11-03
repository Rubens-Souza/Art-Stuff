import styled from "styled-components/native";

import {
    DefaultStyledTextInput
} from "../CommunStyles/CommunStyles";

import Colors from "../../utils/constants/Colors";

export const StyledCommentsView = styled.View`
`;

export const StyledCommentsList = styled.FlatList`
    padding: 9px 4px 6px 12px;
    width: 90%;
`;

export const StyledAddCommentView = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 3px 6px;
`;

export const StyledAddCommentButton = styled.TouchableOpacity`
    margin-right: 6px;
`;

export const StyledAddCommentButtonIcon = styled.Image`
    height: 21px;
    width: 21px;
`;

export const StyledCommentInput = styled(DefaultStyledTextInput)`
    width: 85%;
`;
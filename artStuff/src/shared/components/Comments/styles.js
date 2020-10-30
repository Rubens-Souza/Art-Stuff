import styled from "styled-components/native";

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
    height: 24px;
    width: 24px;
`;

export const StyledCommentInput = styled.TextInput`
    width: 85%;
    padding: 3px;
    font-size: 15px;
    border-bottom-color: ${Colors.Black};
    border-bottom-width: 1px;
`;
import styled from "styled-components/native";

import { 
    DefaultStyledText 
} from "../../shared/components/CommunStyles/CommunStyles";

import Colors from "../../shared/utils/constants/Colors";
import Fonts from "../../shared/utils/constants/Fonts";

export const StyledCommentsView = styled.View`
`;

export const StyledToggleComments = styled.TouchableOpacity`
    flex-direction: row;
    padding: 3px 6px;
`;

export const StyledIcon = styled.Image`
    height: 24px;
    width: 24px;
    margin-left: 6px;
`;

export const StyledToggleTextView = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 6px 12px;
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.White};
`;

export const StyledCommentsText = styled(DefaultStyledText)`
    margin-left: 9px;
    font-size: 14px;
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.White};
    font-family: ${Fonts.MainLight};
`;

export const StyledCommentsList = styled.FlatList``;
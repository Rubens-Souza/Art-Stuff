import styled from "styled-components/native";
import {
    DefaultStyledTitle
} from "../../shared/components/CommunStyles/CommunStyles";

import Colors from "../../shared/utils/constants/Colors";

export const StyledTitle = styled(DefaultStyledTitle)`
    font-size: 27px;
    margin-left: 6px;
`;

export const StyledSafeAreaView = styled.SafeAreaView`
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 9px 9px;
    border-bottom-color: ${Colors.LightGray};
    border-bottom-width: 1px;
`;

export const StyledImage = styled.Image`
    height: 30px;
    width: 30px;
`;
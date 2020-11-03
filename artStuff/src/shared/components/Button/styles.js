import styled from "styled-components/native";

import {
    DefaultStyledText
} from "../CommunStyles/CommunStyles";

import Colors from "../../utils/constants/Colors";

import ButtonTypes from "../../utils/constants/components_enums/ButtonTypes";

export const StyledButton = styled.TouchableOpacity`
    border-width: ${(props) => props.type === ButtonTypes.main ? "0px" : "1px" };  
    border-color: ${Colors.Black};
    background-color: ${(props) => props.type === ButtonTypes.main ? Colors.Black : "transparent"};
    padding: 6px 9px;
    border-radius: 3px;
`;

export const StyledText = styled(DefaultStyledText)`
    color: ${(props) => props.type === ButtonTypes.main ? Colors.White : Colors.Black};
`;
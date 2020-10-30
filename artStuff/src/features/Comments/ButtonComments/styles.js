import styled from "styled-components/native";

import { 
    DefaultStyledText 
} from "../../../shared/components/CommunStyles/CommunStyles";

import Colors from "../../../shared/utils/constants/Colors";
import Fonts from "../../../shared/utils/constants/Fonts";

export const StyledButtonText = styled(DefaultStyledText)`
    margin-left: 9px;
    font-size: 14px;
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.LightBlack};
    font-family: ${Fonts.MainLight};
`;
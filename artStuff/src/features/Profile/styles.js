import styled from "styled-components/native";
import { Gravatar } from "react-native-gravatar";

import {
    DefaultStyledText,
} from "../../shared/components/CommunStyles/CommunStyles";

import Colors from "../../shared/utils/constants/Colors";

export const StyledProfileSafeAreaView = styled.SafeAreaView`
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
`;

export const StyledUserDataView = styled.View`
    align-items: center;
`;

export const StyledUserImage = styled(Gravatar)`
    height: 120px;
    width: 120px;
    border-radius: 6px;
`;

export const StyledUserName = styled(DefaultStyledText)`
    font-size: 33px;
    font-weight: bold;
    margin-top: 12px;
    margin-bottom: 6px;
`;

export const StyledUserEmailText = styled(DefaultStyledText)`
    font-style: italic;
    color: ${Colors.LightBlack};
`;
import styled from "styled-components/native";

import {
    DefaultStyledTextInput,
    DefaultWhiteButton
} from "../../shared/components/CommunStyles/CommunStyles";

export const StyledAddArtSafeAreaView = styled.SafeAreaView`
    flex: 1;
`;

export const StyledAddArtView = styled.ScrollView.attrs({
    contentContainerStyle: {
        flexGrow: 1,        
    }
})`
`;  

export const StyledPostView = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-left: 6px;
`;

export const StyledTextInput = styled(DefaultStyledTextInput)`
    margin: 6px 0px;
    margin-left: 6px;
    width: 78%;
    align-self: center;
`;

export const StyledWhiteButton = styled(DefaultWhiteButton)`
    width: 15%;
    margin-top: 9px;
`;
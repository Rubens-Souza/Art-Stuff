import styled from "styled-components/native";

import Colors from "../../utils/constants/Colors";

export const StyledPostView = styled.View`
    padding: 9px 0;
    width: 100%;
    background-color: ${Colors.LightBlack};
`;

export const StyledPostImage = styled.Image`
    width: 100%;
    max-height: 221px;
    resize-mode: contain;
    margin: 0px 3px;
`;
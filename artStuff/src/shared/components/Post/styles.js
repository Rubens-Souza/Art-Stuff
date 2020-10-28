import styled from "styled-components/native";

import Colors from "../../utils/constants/Colors";

export const StyledPostView = styled.View`
    padding: 9px 0;
    width: 100%;
    background-color: ${Colors.LightBlack};
`;

export const StyledPostImage = styled.Image`
    width: 100%;
    height: 53%;
    resize-mode: contain;
`;
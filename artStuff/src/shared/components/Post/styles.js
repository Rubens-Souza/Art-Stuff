import styled from "styled-components/native";
import Colors from "../../utils/constants/Colors";

export const StyledPostView = styled.View`
    padding: 9px 0;
    width: 100%;
    background-color: ${Colors.SnowWhite};
    margin-bottom: 6px;
`;

export const StyledPostImage = styled.Image`
    width: 100%;
    height: auto;
    resize-mode: contain;
    background-color: red;
    aspect-ratio: ${3/2};
    margin: 3px 0px;
`;
import styled from "styled-components/native";
import Colors from "../../utils/constants/Colors";

export const StyledPostView = styled.View`
    padding: 6px 0 9px 0;
    margin-top: 6px;
    width: 100%;
    background-color: ${Colors.SnowWhite};
`;

export const StyledPostImage = styled.Image`
    width: 100%;
    height: auto;
    resize-mode: contain;
    aspect-ratio: ${3/2};
    margin: 3px 0px;
`;

export const StyledHorizontalLineView = styled.View`
    margin-top: 9px;
    padding: 0 37%;
`;

export const StyledHorizontalLine = styled.View`
    width: 100%;
    border-bottom-width: 3px;
    border-bottom-color: ${Colors.Black};
`;
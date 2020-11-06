import styled from "styled-components/native";
import Colors from "../../utils/constants/Colors";

export const StyledImagePickerView = styled.View`
    justify-content: space-evenly;
    align-items: center;
`;

export const StyledSelectedImage = styled.Image`
    width: 100%;
    height: 100%;
    resize-mode: contain;
`;

export const StyledSelectedImageView = styled.View`
    justify-content: center;
    align-items: center;
    background-color: ${Colors.GrayWhite};
    width: 85%;
    height: 85%;
`;

export const StyledImageNotSelectedPalceholder = styled.Image`
    width: 180px;
    height: 180px;
    opacity: 0.040;
`;
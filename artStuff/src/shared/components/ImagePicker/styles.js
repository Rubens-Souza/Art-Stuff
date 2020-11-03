import styled from "styled-components/native";
import Colors from "../../utils/constants/Colors";

export const StyledImagePickerView = styled.View`
    justify-content: space-evenly;
    align-items: center;
`;

export const StyledSelectedImage = styled.Image`
    width: ${(props) => props.width ? props.width : "auto"};
    height: ${(props) => props.height ? props.height : "auto"};
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
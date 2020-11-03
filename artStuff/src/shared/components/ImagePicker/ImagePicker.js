import React, { useState } from "react";
import PropTypes from "prop-types";
import { default as NativeImagePicker } from "react-native-image-picker";

import {
    DefaultBlackButton,
    DefaultBlackButtonText
} from "../CommunStyles/CommunStyles";

import {
    StyledImagePickerView,
    StyledSelectedImage,
    StyledImageNotSelectedPalceholder,
    StyledSelectedImageView
} from "./styles";

import If from "../If/If";

import Icons from "../../utils/constants/Icons";

import { hasSetFunctionProperty } from "../../utils/functions/ComponentsUtils";
import { EmptyString, isStringBlank } from "../../utils/functions/StringUtils";

import ImageData from "../../dtos/ImageData";

const ErroCodes = {
    cameraUnavailable: "camera_unavailable",
    permission: "permission",
    others: "others",
};

const MidaTypes = {
    photo: "photo",
    video: "video",
};

const ImagePicker = ({
    onCancel,
    onPermissionError,
    onSelectionError,
    onImageSelection,
    showSelectedImage,
    displayText,
}) => {

    const [imagePreview, setImagePreview] = useState(EmptyString);
    const [hasSelectedAnImage, setHasSelectedAnImage] = useState(false);

    const options = {
        mediaType: MidaTypes.photo,
        quality: 1,
        includeBase64: true,
    };

    const handleUserAction = (response) => {

        if (!isStringBlank(response.erroCode)) {
            handleErro(response.erroCode);
        }

        if (response.didCancel) {
            handleCancel();
        }
        else {
            handleImageSelection(response);
        }
    };

    const handleErro = (erroCode) => {

        switch (erroCode) {

            case ErroCodes.permission:
                if (hasSetFunctionProperty(onPermissionError)) {
                    onPermissionError();
                }
            break;

            case ErroCodes.others:
                if (hasSetFunctionProperty(onSelectionError)) {
                    onSelectionError();
                }
            break;
        }
    };

    const handleCancel = () => {

        if (hasSetFunctionProperty(onCancel)) {
            onCancel();
        }
    };

    const handleImageSelection = (response) => {
        setHasSelectedAnImage(true);
        const SelectedImage = getImageData(response);

        setImagePreview(SelectedImage);

        if (hasSetFunctionProperty(onImageSelection)) {
            onImageSelection(SelectedImage);
        }
    };

    const getImageData = (response) => {
        const uri = response.uri;
        const imageBase64 = response.data;
        const height = response.height;
        const width = response.width;
        const formatType = response.type;

        return new ImageData(uri, imageBase64, height, width, formatType);
    };

    const SelectImage = () => {
        NativeImagePicker.launchImageLibrary(options, handleUserAction);
    };

    return (
        <StyledImagePickerView>
            <If isTrue={showSelectedImage}>
                <StyledSelectedImageView>
                    <If isTrue={hasSelectedAnImage}>
                        <StyledSelectedImage source={imagePreview} />
                    </If>
                    <If isTrue={!hasSelectedAnImage}>
                        <StyledImageNotSelectedPalceholder source={Icons.Artist} />
                    </If>
                </StyledSelectedImageView>
            </If>

            <DefaultBlackButton onPress={SelectImage}>
                <DefaultBlackButtonText>
                    {displayText}
                </DefaultBlackButtonText>
            </DefaultBlackButton>
        </StyledImagePickerView>
    );
};

ImagePicker.propTypes = {
    onCancel: PropTypes.func,
    onPermissionError: PropTypes.func,
    onSelectionError: PropTypes.func,
    onImageSelection: PropTypes.func,
    showSelectedImage: PropTypes.bool,
    displayText: PropTypes.string,
};

ImagePicker.defaultProps = {
    onCancel: null,
    onPermissionError: null,
    onSelectionError: null,
    onImageSelection: null,
    showSelectedImage: true,
    displayText: "Choose an image!",
};

export default ImagePicker;
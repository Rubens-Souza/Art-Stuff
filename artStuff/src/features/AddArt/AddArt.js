import React, { useState } from "react";

import {
    DefaultWhiteButtonText
} from "../../shared/components/CommunStyles/CommunStyles";

import {
    StyledAddArtView,
    StyledTextInput,
    StyledWhiteButton,
    StyledPostView
} from "./styles";

import ImagePicker from "../../shared/components/ImagePicker/ImagePicker";

import Icons from "../../shared/utils/constants/Icons";
import { EmptyString } from "../../shared/utils/functions/StringUtils";

import TabData from "../../shared/dtos/TabData";

const AddArt = () => {

    const [artTitle, setArtTitle] = useState(EmptyString);

    const handleTextTitleChange = (text) => {
        setArtTitle(text);
    };

    const saveSelectedImage = (imageData) => {
        // TODO: Save image data in firebase
        console.log(imageData);
    };

    return (
        <StyledAddArtView>
            <StyledPostView>
                <StyledWhiteButton>
                    <DefaultWhiteButtonText>
                        Send
                    </DefaultWhiteButtonText>
                </StyledWhiteButton>

                <StyledTextInput
                    placeholder={"Add a title to your work of art"}
                    value={artTitle}
                    onChange={handleTextTitleChange}
                />
            </StyledPostView>
            
            <ImagePicker onImageSelection={saveSelectedImage} />
        </StyledAddArtView>
    );
};

export const AddArtTabData = new TabData("AddArt", Icons.AddArtFill, Icons.AddArt);;
export default AddArt;
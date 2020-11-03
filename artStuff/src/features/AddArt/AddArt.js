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

import ScreenData from "../../shared/dtos/ScreenData";

const AddArt = () => {

    const [artTitle, setArtTitle] = useState(EmptyString);

    const handleTextTitleChange = (text) => {
        setArtTitle(text);
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
            
            <ImagePicker />
        </StyledAddArtView>
    );
};

export const AddArtScreenData = new ScreenData("AddArt", Icons.AddArtFill, Icons.AddArt);;
export default AddArt;
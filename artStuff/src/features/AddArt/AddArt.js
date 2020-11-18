import React, { useState } from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { connect } from "react-redux";

import { addPostToFeed } from "../../redux/Post/PostOperations";

import {
    DefaultWhiteButtonText
} from "../../shared/components/CommunStyles/CommunStyles";

import {
    StyledAddArtView,
    StyledTextInput,
    StyledWhiteButton,
    StyledPostView,
    StyledAddArtSafeAreaView
} from "./styles";

import ImagePicker from "../../shared/components/ImagePicker/ImagePicker";

import Icons from "../../shared/utils/constants/Icons";
import { EmptyString, isStringBlank } from "../../shared/utils/functions/StringUtils";

import TabData from "../../shared/dtos/TabData";
import PostData from "../../shared/dtos/PostData";
import ImageData from "../../shared/dtos/ImageData";

const INITIAL_STATE = {
    artTitle: EmptyString,
    image: ImageData.EmptyImageData,
};

const AddArt = ({
    onAddPost,
    activeUser,
}) => {

    const [artTitle, setArtTitle] = useState(INITIAL_STATE.artTitle);
    const [image, setImage] = useState(INITIAL_STATE.image);

    const handleTextTitleChange = (text) => {
        setArtTitle(text);
    };

    const saveSelectedImage = (imageData) => {
        setImage(imageData);
    };
    
    const handleSend = () => {
        if (image === ImageData.EmptyImageData || isStringBlank(artTitle)) {
            return;
        }

        setArtTitle(INITIAL_STATE.artTitle);
        setImage(INITIAL_STATE.image);

        const postData = new PostData(activeUser, artTitle, image, new Array(0));
        // TODO: Save image data in firebase
        onAddPost(postData);
    };

    return (
        <StyledAddArtSafeAreaView>
            <StyledAddArtView nestedScrollEnabled={true}>
                <StyledPostView>
                    <StyledWhiteButton>
                        <DefaultWhiteButtonText onPress={handleSend}>
                            Send
                        </DefaultWhiteButtonText>
                    </StyledWhiteButton>

                    <StyledTextInput
                        placeholder={"Add a title to your work of art"}
                        value={artTitle}
                        onChangeText={handleTextTitleChange}
                    />
                </StyledPostView>
                
                <ImagePicker
                    onImageSelection={saveSelectedImage}
                    value={image !== ImageData.EmptyImageData ? image.getImageSource() : null}
                />
            </StyledAddArtView>
        </StyledAddArtSafeAreaView>
    );
};

AddArt.propTypes = {
    onAddPost: PropTypes.func.isRequired,
    activeUser: PropTypes.object.isRequired,
};

const mapStateToProps = ({
    UserReducer
}) => ({
    activeUser: UserReducer.userData,
});

const mapDispatchToProps = {
    onAddPost: addPostToFeed,
};

const connectToRedux = compose(connect(mapStateToProps, mapDispatchToProps));

export const AddArtTabData = new TabData(AddArt.name, Icons.AddArtFill, Icons.AddArt);
export default connectToRedux(AddArt);
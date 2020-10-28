import React from "react";

import {
    StyledPostView,
    StyledPostImage
} from "./styles";

import Author from "../Author/Author";

const Post = ({
    artImage, userName, email
}) => {
    return (
        <StyledPostView>
            <Author userName={userName} email={email}>Flying</Author>
            <StyledPostImage source={artImage}/>
        </StyledPostView>
    );
};

export default Post;
import React from "react";

import {
    StyledPostView,
    StyledPostImage
} from "./styles";

import Author from "../Author/Author";

const Post = ({
    artImage, userName, email, postTitle
}) => {
    return (
        <StyledPostView>
            <Author userName={userName} email={email}>
                {postTitle}
            </Author>
            <StyledPostImage source={artImage}/>
        </StyledPostView>
    );
};

export default Post;
import React from "react";

import {
    StyledCommentView,
    StyledCommentAuthorImage,
    StyledCommentTextView,
    StyledCommentAuthorName,
    StyledCommentText
} from "./styles";

const Comment = ({
    commentData, children
}) => {

    const userGravatarAcessData = {
        email: commentData.author.email,
        secure: true,
    };

    return (
        <StyledCommentView>
            <StyledCommentAuthorImage options={userGravatarAcessData}/>
            <StyledCommentTextView>
                <StyledCommentAuthorName>{commentData.author.nickName}</StyledCommentAuthorName>
                <StyledCommentText>{children}</StyledCommentText>
            </StyledCommentTextView>
        </StyledCommentView>
    );
};

export default Comment;
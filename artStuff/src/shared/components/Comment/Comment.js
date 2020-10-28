import React from "react";

import {
    StyledCommentView,
    StyledCommentAuthorImage,
    StyledCommentTextView,
    StyledCommentAuthorName,
    StyledCommentText
} from "./styles";

const Comment = ({
    userName, email, children
}) => {

    const userGravatarAcessData = {
        email: email,
        secure: true,
    };

    return (
        <StyledCommentView>
            <StyledCommentAuthorImage options={userGravatarAcessData}/>
            <StyledCommentTextView>
                <StyledCommentAuthorName>{userName}</StyledCommentAuthorName>
                <StyledCommentText>{children}</StyledCommentText>
            </StyledCommentTextView>
        </StyledCommentView>
    );
};

export default Comment;
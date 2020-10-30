import React from "react";
import PropTypes from "prop-types";

import {
    StyledCommentView,
    StyledCommentAuthorImage,
    StyledCommentTextView,
    StyledCommentAuthorName,
    StyledCommentText
} from "./styles";

import CommentData from "../../dtos/CommentData";

const Comment = ({
    commentData, 
    children
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

Comment.propTypes = {
    commentData: PropTypes.object.isRequired,
};

Comment.defaultProps = {
    commentData: CommentData.EmptyComment,
};

export default Comment;
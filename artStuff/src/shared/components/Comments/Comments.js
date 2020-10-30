import React, { useState } from "react";
import PropTypes from "prop-types";

import {
    StyledCommentsView,
    StyledCommentsList,
    StyledAddCommentView,
    StyledAddCommentButton,
    StyledAddCommentButtonIcon,
    StyledCommentInput
} from "./styles";

import Comment from "../Comment/Comment";

import Icons from "../../utils/constants/Icons";
import { EmptyString } from "../../utils/functions/StringUtils";
import { hasSetFunctionProperty } from "../../utils/functions/ComponentsUtils";

import CommentData from "../../dtos/CommentData";

const Comments = ({
    commentsData,
    onNewCommentInsert,
}) => {

    const [newComment, setNewComment] = useState(EmptyString);

    const handleNewCommentChange = (text) => {
        setNewComment(text);
    };

    const handleNewCommentInsert = () => {
        let newCommentContent = newComment;
        setNewComment(EmptyString);

        // TODO: Add comment with user without getting the active user from props
        // let newCommentData = new CommentData(activeUser, newCommentContent);

        if (hasSetFunctionProperty(onNewCommentInsert)) {
            onNewCommentInsert();
        }
    };

    return (
        <StyledCommentsView>
            <StyledCommentsList 
                data={commentsData}
                keyExtractor={comment => comment.id}
                renderItem={({item: comment}) => {
                    return (
                        <Comment commentData={comment}>
                            {comment.comment}
                        </Comment>
                    );
                }}
            />
            <StyledAddCommentView>
                <StyledAddCommentButton onPress={handleNewCommentInsert}>
                    <StyledAddCommentButtonIcon source={Icons.Plus} />
                </StyledAddCommentButton>

                <StyledCommentInput 
                    placeholder={"Add a nice comment!"}
                    value={newComment}
                    onChange={handleNewCommentChange}
                />
            </StyledAddCommentView>
        </StyledCommentsView>
    );
};

Comments.propTypes = {
    commentsData: PropTypes.array.isRequired,
    onNewCommentInsert: PropTypes.func,
};

Comments.defautProps = {
    commentsData: new Array(0),
    onNewCommentInsert: null,
};

export default Comments;
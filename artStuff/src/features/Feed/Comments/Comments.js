import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import {
    StyledCommentsView,
    StyledCommentsList,
    StyledAddCommentView,
    StyledAddCommentButton,
    StyledAddCommentButtonIcon,
    StyledCommentInput
} from "./styles";

import Comment from "../../../shared/components/Comment/Comment";

import Icons from "../../../shared/utils/constants/Icons";
import { EmptyString } from "../../../shared/utils/functions/StringUtils";
import { hasSetFunctionProperty } from "../../../shared/utils/functions/ComponentsUtils";

import CommentData from "../../../shared/dtos/CommentData";

const Comments = ({
    commentsData,
    onNewCommentInsert,
}) => {
    const [newComment, setNewComment] = useState(EmptyString);
    const activeUser = useSelector((state) => state.UserReducer.userData);

    const handleNewCommentChange = (text) => {
        setNewComment(text);
    };

    const handleNewCommentInsert = () => {
        let newCommentContent = newComment;
        let newCommentData = new CommentData(activeUser, newCommentContent);
        
        setNewComment(EmptyString);

        if (hasSetFunctionProperty(onNewCommentInsert)) {
            onNewCommentInsert(newCommentData);
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
                    onChangeText={handleNewCommentChange}
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
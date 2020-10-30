import React, { useState } from "react";
import PropTypes from "prop-types";

import {
    StyledCommentsView,
    StyledCommentsList
} from "./styles";

import Comment from "../Comment/Comment";

const Comments = ({
    commentsData
}) => {

    const [comments] = useState(commentsData);

    return (
        <StyledCommentsView>
            <StyledCommentsList 
                data={comments}
                keyExtractor={comment => comment.id}
                renderItem={({item: comment}) => {
                    return (
                        <Comment commentData={comment}>
                            {comment.comment}
                        </Comment>
                    );
                }}
            />
        </StyledCommentsView>
    );
};

Comments.propTypes = {
    commentsData: PropTypes.array.isRequired,
};

Comments.defautProps = {
    commentsData: new Array(0),
};

export default Comments;
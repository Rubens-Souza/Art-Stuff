import React, { useState } from "react";
import PropTypes from "prop-types";

import Collapsible from "react-native-collapsible";

import {
    StyledPostView,
    StyledHorizontalLineView,
    StyledHorizontalLine,
    StyledPostImage,
    StyledFeedbackView,
    StyledLikeShareView,
    StyledShareButton,
    StyledShareButtonIcon
} from "./styles";

import Author from "../../../shared/components/Author/Author";
import Comments from "../Comments/Comments";
import ToggleButtons from "../../../shared/components/ToggleButton/ToggleButton";
import ButtonComments from "../../../shared/components/ButtonComments/ButtonComments";

import Icons from "../../../shared/utils/constants/Icons";

import PostData from "../../../shared/dtos/PostData";

const Initial_State = {
    areCommentsOpen: true,
}

const Post = ({
    postData
}) => {

    const [areCommentsOpen, setAreCommentsOpen] = useState(Initial_State.areCommentsOpen);
    const [comments, setComments] = useState(postData.comments);

    const handleOpenComments = () => {
        setAreCommentsOpen(true);
    };

    const handleCloseComments = () => {
        setAreCommentsOpen(false);
    };

    const handleNewCommentInsert = (newComment) => {
        const updatedPostComments = [...comments];
        updatedPostComments.push(newComment);

        setComments(updatedPostComments);
    };

    return (
        <StyledPostView>
            <Author user={postData.author}>
                {postData.title}
            </Author>

            <StyledPostImage source={postData.image}/>

            <StyledFeedbackView>
                <ButtonComments 
                    onEnable={handleOpenComments}
                    onDisable={handleCloseComments}
                    numberComments={comments.length}/>
                
                <StyledLikeShareView>
                    <ToggleButtons enableIcon={Icons.Liked} disableIcon={Icons.Like}/>
                    <StyledShareButton>
                        <StyledShareButtonIcon source={Icons.Share}/>
                    </StyledShareButton>
                </StyledLikeShareView>
            </StyledFeedbackView>

            <Collapsible collapsed={areCommentsOpen}>
                <Comments 
                    commentsData={comments}
                    onNewCommentInsert={handleNewCommentInsert}
                />
            </Collapsible>

            <StyledHorizontalLineView>
                <StyledHorizontalLine/>
            </StyledHorizontalLineView>
        </StyledPostView>
    );
};

Post.propTypes = {
    postData: PropTypes.object.isRequired,
};

Post.defaultProps = {
    postData: PostData.EmptyPost,
};

export default Post;
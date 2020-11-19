import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Collapsible from "react-native-collapsible";

import { addCommentToPost } from "../../../redux/Post/PostOperations";

import {
    DefaultStyledHorizontalLine,
    DefaultStyledHorizontalLineView
} from "../../../shared/components/CommunStyles/CommunStyles";

import {
    StyledPostView,
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
    postData,
    onInsertComment,
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
        onInsertComment(postData.id, newComment);
        setComments(postData.comments);
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

            <DefaultStyledHorizontalLineView>
                <DefaultStyledHorizontalLine/>
            </DefaultStyledHorizontalLineView>
        </StyledPostView>
    );
};

Post.propTypes = {
    postData: PropTypes.instanceOf(PostData).isRequired,
    onInsertComment: PropTypes.func.isRequired,
};

Post.defaultProps = {
    postData: PostData.EmptyPost,
    onInsertComment: null,
};

const mapStateToProps = null;

const mapDispatchToProps = {
    onInsertComment: addCommentToPost,
};

const connectToRedux = compose(connect(mapStateToProps, mapDispatchToProps));
export default connectToRedux(Post);
import { createPost, addComment } from "./PostAction";

import PostData from "../../shared/dtos/PostData";
import CommmentData from "../../shared/dtos/CommentData";

import PostService from "./PostService";

export const addPostToFeed = (post) => (dispatch) => {
    if (post === PostData.EmptyPost) {
        return;
    }

    PostService.savePost(post)
        .then(() => dispatch(createPost(post)));
};

export const addCommentToPost = (postId, commentData) => (dispatch) => {
    if (commentData === CommmentData.EmptyCommentData) {
        return;
    }

    return dispatch(addComment(postId, commentData));
};
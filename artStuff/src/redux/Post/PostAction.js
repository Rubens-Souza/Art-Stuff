export const CREATE_POST = "post/create";
export const ADD_COMMENT = "post/addComment";

export const createPost = (postData) => ({
    type: CREATE_POST, 
    payload: {
        post: postData,
    },
});

export const addComment = (postId, commentData) => ({
    type: ADD_COMMENT, 
    payload: {
        postId: postId,
        comment: commentData,
    },
});
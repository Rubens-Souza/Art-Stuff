export const CREATE_POST = "post/create";

export const createPost = (postData) => ({
    type: CREATE_POST, 
    payload: {
        post: postData,
    },
});
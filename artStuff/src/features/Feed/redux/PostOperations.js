import { createPost } from "./PostAction";

export const addPostToFeed = (post) => (dispatch) => {
    return dispatch(createPost(post))
};
import { CREATE_POST, ADD_COMMENT } from "./PostAction";

// TODO: Remove mock posts
import { posts } from "../../shared/mocks/PostMocks";

const INITIAL_STATE = {
    feedPosts: posts,
};

const PostReducer = (state = INITIAL_STATE, action) => {
    if (!action) {
        return state;
    }

    switch (action.type) {
        case (CREATE_POST): {
            return {
                ...state,
                feedPosts: state.feedPosts.concat(action.payload.post),
            };
        }

        case (ADD_COMMENT): {
            return {
                ...state,
                feedPosts: state.feedPosts.map((post) => {
                    if (action.payload.postId === post.id) {
                        post.comments = post.comments.concat(action.payload.comment);
                    }
                    return post;
                }),
            };
        }

        default: {
            return state;
        }
    }
};

export default PostReducer;
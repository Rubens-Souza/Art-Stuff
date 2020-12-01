import React from "react";
import { useSelector } from "react-redux";

import {
    StyledPostsList
} from "./styles";

import Post from "./Post/Post";

import Icons from "../../shared/utils/constants/Icons";

import TabData from "../../shared/dtos/TabData";

const Feed = () => {
    const posts = useSelector((state) => state.PostReducer.feedPosts);

    return (
        <StyledPostsList
            data={posts}
            keyExtractor={post => post.id}
            renderItem={({item: post}) => {
              return <Post postData={post} />
            }}
        />
    );
};

export const FeedTabData = new TabData(Feed.name, Icons.FeedEnable, Icons.FeedDisable);
export default Feed;
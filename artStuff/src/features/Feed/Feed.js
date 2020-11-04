import React from "react";

import {
    StyledPostsList
} from "./styles";

import Post from "../../features/Post/Post";

import Icons from "../../shared/utils/constants/Icons";

import KateFoxPostImage from "../../../assets/imgs/art-test.jpg";
import YuumeiPostImage from "../../../assets/imgs/art-test4.jpg";
import YuumeiPostImage2 from "../../../assets/imgs/art-test5.jpg";

import UserData from "../../shared/dtos/UserData";
import PostData from "../../shared/dtos/PostData";
import CommentData from "../../shared/dtos/CommentData";
import TabData from "../../shared/dtos/TabData";

const Feed = () => {

    const kateFox = new UserData("fake.person.job@gmail.com", "Kate Fox");
    const yuumei = new UserData("fake.person.job@gmail.com", "Yuumei");
    
    const katePost = new PostData(kateFox, "Flying", KateFoxPostImage, []);
    const yuPost = new PostData(yuumei, "Flying", YuumeiPostImage, []);
    const yuPost2 = new PostData(kateFox, "Flying", YuumeiPostImage2, []);

    const comment = new CommentData(yuumei, "I don't understand, you're saying this is digital??? If so, I'm impressed. Although I don't think I'll ever try it. I do digital work, and like how that comes out. But I also do traditional art, and don't want to mix the two.");
    let x = [comment];

    const posts = [
        katePost,
        yuPost,
        yuPost2,
    ];

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
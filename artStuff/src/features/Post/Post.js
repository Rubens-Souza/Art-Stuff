import React from "react";

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

import Author from "../../shared/components/Author/Author";
import Comments from "../Comments/Comments";
import ToggleButtons from "../../shared/components/ToggleButton/ToggleButton";

import CommentData from "../../shared/dtos/CommentData";
import UserData from "../../shared/dtos/UserData";

import Icons from "../../shared/utils/constants/Icons";

const Post = ({
    postData
}) => {

    const user = new UserData("gamer@gmail.com", "Pro-Player");
    const comment = new CommentData(user, "I don't understand, you're saying this is digital??? If so, I'm impressed. Although I don't think I'll ever try it. I do digital work, and like how that comes out. But I also do traditional art, and don't want to mix the two.");

    return (
        <StyledPostView>
            <Author user={postData.author}>
                {postData.title}
            </Author>

            <StyledPostImage source={postData.image}/>

            <StyledFeedbackView>
                <Comments/>
                <StyledLikeShareView>
                    <ToggleButtons enableIcon={Icons.Liked} disableIcon={Icons.Like}/>
                    <StyledShareButton>
                        <StyledShareButtonIcon source={Icons.Share}/>
                    </StyledShareButton>
                </StyledLikeShareView>
            </StyledFeedbackView>

            <StyledHorizontalLineView>
                <StyledHorizontalLine/>
            </StyledHorizontalLineView>
        </StyledPostView>
    );
};

export default Post;
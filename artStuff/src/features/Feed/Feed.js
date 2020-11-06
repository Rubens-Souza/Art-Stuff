import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";

import {
    StyledPostsList
} from "./styles";

import Post from "./Post/Post";

import Icons from "../../shared/utils/constants/Icons";

import TabData from "../../shared/dtos/TabData";

const Feed = ({
    posts,
}) => {
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

Feed.propTypes = {
    posts: PropTypes.array.isRequired,
};

const mapStateToProps = ({
    PostReducer,
}) => ({
    posts: PostReducer.feedPosts,
});

const mapDispatchToProps = null;

const connectToRedux = compose(connect(mapStateToProps, mapDispatchToProps));

export const FeedTabData = new TabData(Feed.name, Icons.FeedEnable, Icons.FeedDisable);
export default connectToRedux(Feed);
import React from "react";

import {
    StyledCommentsView,
    StyledCommentsText,
    StyledCommentsList,
    StyledIcon,
    StyledToggleComments
} from "./styles";

import Icons from "../../shared/utils/constants/Icons";

const Comments = () => {
    return (
        <StyledCommentsView>
            <StyledToggleComments>
                <StyledIcon source={Icons.ChatOutline} />
                <StyledCommentsText>
                    {2} Comments
                </StyledCommentsText>
            </StyledToggleComments>

            <StyledCommentsList />
        </StyledCommentsView>
    );
};

export default Comments;
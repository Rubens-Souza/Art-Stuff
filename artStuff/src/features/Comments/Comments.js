import React from "react";

import {
    StyledCommentsView,
    StyledCommentsList
} from "./styles";

import ButtonComments from "../../shared/components/ButtonComments/ButtonComments";

const Comments = () => {
    return (
        <StyledCommentsView>
            <ButtonComments numberComments={7}/>

            <StyledCommentsList />
        </StyledCommentsView>
    );
};

export default Comments;
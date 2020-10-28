import React from "react";

import {
    StyledAuthorView, 
    StyledAuthorImage,
    StyledAuthorName, 
    StyledSubText, 
    StyledTextView, 
} from "./styles";

const Author = ({
    userName, email, children
}) => {

    const userGravatarAcessData = {
        email: email,
        secure: true,
    };

    return (
        <StyledAuthorView>
            <StyledAuthorImage options={userGravatarAcessData}/>
            <StyledTextView>
                <StyledAuthorName>{userName}</StyledAuthorName>
                <StyledSubText>
                    {children}
                </StyledSubText>
            </StyledTextView>
        </StyledAuthorView>
    );
};

export default Author;
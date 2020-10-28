import React from "react";

import {
    StyledAuthorView, 
    StyledAuthorImage,
    StyledAuthorName, 
    StyledSubText, 
    StyledTextView, 
} from "./styles";

import If from "../If/If";

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

                <If isTrue={children}>
                    <StyledSubText>
                        {children}
                    </StyledSubText>
                </If>
            </StyledTextView>
        </StyledAuthorView>
    );
};

export default Author;
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
    user, children
}) => {

    const userGravatarAcessData = {
        email: user.email,
        secure: true,
    };

    return (
        <StyledAuthorView>
            <StyledAuthorImage options={userGravatarAcessData}/>
            
            <StyledTextView>
                <StyledAuthorName>{user.nickName}</StyledAuthorName>

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
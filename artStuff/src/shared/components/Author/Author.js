import React from "react";
import PropTypes from "prop-types";

import {
    StyledAuthorView, 
    StyledAuthorImage,
    StyledAuthorName, 
    StyledSubText, 
    StyledTextView, 
} from "./styles";

import If from "../If/If";

import UserData from "../../dtos/UserData";

const Author = ({
    user, 
    children
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

Author.propTypes = {
    user: PropTypes.object.isRequired,
};

Author.defaultProps = {
    user: UserData.EmptyUser,
};

export default Author;
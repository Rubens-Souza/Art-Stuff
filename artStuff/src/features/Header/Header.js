import React from "react";
import  {
    StyledSafeAreaView,
    StyledImage,
    StyledTitle
} from "./styles";

import Icons from "../../shared/utils/constants/Icons";

const Header = () => {
    return (
        <StyledSafeAreaView>
            <StyledImage source={Icons.FavIcon}/>
            <StyledTitle>Art Stuff</StyledTitle>
        </StyledSafeAreaView>
    );
};

export default Header;
import React from "react";
import  {
    StyledSafeAreaView,
    StyledIcon,
    StyledTitle
} from "./styles";

import Icon from "../../../assets/imgs/icon.png";

const Header = () => {
    return (
        <StyledSafeAreaView>
            <StyledIcon source={Icon}/>
            <StyledTitle>Art Stuff</StyledTitle>
        </StyledSafeAreaView>
    );
};

export default Header;
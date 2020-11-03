import React from "react";
import PropTypes from "prop-types";

import {
    StyledButton,
    StyledText
} from "./styles";

import ButtonTypes from "../../utils/constants/components_enums/ButtonTypes";

const Button = ({
    children,
    className, 
    onPress,
    type 
}) => {

    return (
        <StyledButton onPress={onPress} className={className} type={type}>
            <StyledText className={className} type={type}>
                {children}
            </StyledText>
        </StyledButton>
    );
};

Button.propTypes = {
    onPress: PropTypes.func,
    type: PropTypes.string,
};

Button.defaultProps = {
    onPress: null,
    type: ButtonTypes.main,
};

export default Button;
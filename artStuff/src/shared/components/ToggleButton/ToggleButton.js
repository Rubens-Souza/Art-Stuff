import React, { useState } from "react";
import PropTypes from "prop-types";

import {
    StyledToggleButton,
    StyledIcon
} from "./styles";

import { hasSetFunctionProperty } from "../../utils/functions/ComponentsUtils";

const ToggleButton = ({
    onEnable,
    onDisable,
    enableIcon,
    disableIcon,
    children
}) => {

    const [isActive, setIsActive] = useState(false);

    const handleButtonPress = () => {
        setIsActive(!isActive);

        if (isActive && hasSetFunctionProperty(onEnable)) {
            onEnable();
        }
        else if (!isActive && hasSetFunctionProperty(onDisable)) {
            onDisable();
        }
    };

    const getIcon = () => {
        return isActive ? enableIcon : disableIcon;
    };
    
    return (
        <StyledToggleButton onPress={handleButtonPress}>
            <StyledIcon source={getIcon()} />
            {children}
        </StyledToggleButton>
    );
};

ToggleButton.propTypes = {
    onEnable: PropTypes.func,
    onDisable: PropTypes.func,
    enableIcon: PropTypes.number.isRequired,
    disableIcon: PropTypes.number.isRequired,
};

ToggleButton.defaultProps = {
    onEnable: null,
    onDisable: null,
    enableIcon: null,
    disableIcon: null,
};

export default ToggleButton;
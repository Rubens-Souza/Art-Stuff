import React from "react";
import PropTypes from "prop-types";

import {
    StyledButtonText,
} from "./styles";

import If from "../If/If";
import ToggleButton from "../ToggleButton/ToggleButton";

import Icons from "../../utils/constants/Icons";

const ButtonComments = ({
    onDisable,
    onEnable,
    numberComments,
}) => {

    return (
        <ToggleButton 
            enableIcon={Icons.ChatOpen} 
            disableIcon={Icons.ChatOutline}
            onDisable={onDisable}
            onEnable={onEnable}>
            
            <StyledButtonText>
                <If isTrue={numberComments !== undefined && numberComments !== null}>
                    {`${numberComments} `}
                </If>

                Comments
            </StyledButtonText>
        </ToggleButton>
    );
};

ButtonComments.propTypes = {
    onEnable: PropTypes.func,
    onDisable: PropTypes.func,
    numberComments: PropTypes.number,
};

ButtonComments.defaultProps = {
    onEnable: null,
    onDisable: null,
    numberComments: null,
};

export default ButtonComments;
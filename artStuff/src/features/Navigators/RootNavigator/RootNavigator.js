import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "../AuthNavigator/AuthNavigator";
import HomeNavigator from "../HomeNavigator/HomeNavigator";

import UserData from "../../../shared/dtos/UserData";

const RootNavigator = ({
    userData,
}) => {

    const isUserSignedIn = () => {
        return userData !== UserData.EmptyUser;
    };
    
    const getNavigator = () => {
        if (isUserSignedIn()) {
            return (<HomeNavigator />);
        }

        return (<AuthNavigator />);
    };

    return (
        <NavigationContainer>
            {getNavigator()}
        </NavigationContainer>
    );
};

RootNavigator.propTypes = {
    userData: PropTypes.object.isRequired,
};

const mapStateToProps = ({
    UserReducer,
}) => ({
    userData: UserReducer.userData,
});

const mapDispatchToProps = null;

const connectToRedux = compose(connect(mapStateToProps, mapDispatchToProps));
export default connectToRedux(RootNavigator);
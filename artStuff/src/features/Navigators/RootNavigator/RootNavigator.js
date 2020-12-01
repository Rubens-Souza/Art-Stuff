import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "../AuthNavigator/AuthNavigator";
import HomeNavigator from "../HomeNavigator/HomeNavigator";

import UserData from "../../../shared/dtos/UserData";

const RootNavigator = () => {
    const userData = useSelector((state) => state.UserReducer.userData);

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

export default RootNavigator;
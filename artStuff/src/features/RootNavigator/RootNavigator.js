import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "../AuthNavigator/AuthNavigator";
import HomeNavigator from "../HomeNavigator/HomeNavigator";

const RootNavigator = () => {

    const [isUserSignedIn] = useState(false);
    
    const getNavigator = () => {
        if (isUserSignedIn) {
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
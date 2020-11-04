import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeNavigator, { HomeNavigatorScreenData } from "../HomeNavigator/HomeNavigator";
import Login, { LoginScreenData } from "../login/login";

const Stack = createStackNavigator();

const Screens = [
    LoginScreenData,
    HomeNavigatorScreenData,
];

const AuthNavigator = () => {

    const ScreenOptions = {
        headerShown: false,
    };

    return (
        <Stack.Navigator 
            screenOptions={ScreenOptions}
            initialRouteName={Login.name}>

            <Stack.Screen name={LoginScreenData.name} component={Login} />
            <Stack.Screen name={HomeNavigatorScreenData.name} component={HomeNavigator} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
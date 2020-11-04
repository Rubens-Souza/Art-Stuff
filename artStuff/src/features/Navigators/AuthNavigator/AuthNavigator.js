import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeNavigator, { HomeNavigatorScreenData } from "../HomeNavigator/HomeNavigator";
import CreateAccount, { CreateAccoutScreenData } from "../../CreateAccount/CreateAccount";
import Login, { LoginScreenData } from "../../Login/Login";

const Stack = createStackNavigator();

const Screens = [
    LoginScreenData,
    HomeNavigatorScreenData,
    CreateAccoutScreenData,
];

const AuthNavigator = () => {

    const ScreenOptions = {
        headerShown: false,
    };

    return (
        <Stack.Navigator 
            screenOptions={ScreenOptions}
            initialRouteName={LoginScreenData.name}>

            <Stack.Screen name={LoginScreenData.name} component={Login} />
            <Stack.Screen name={HomeNavigatorScreenData.name} component={HomeNavigator} />
            <Stack.Screen name={CreateAccoutScreenData.name} component={CreateAccount} />
        </Stack.Navigator>
    );
};

export default AuthNavigator;
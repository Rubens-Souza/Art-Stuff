import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feed from "../Feed/Feed";

import AppScreens from "../../shared/utils/constants/AppScreens";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigator = () => {

    const ScreenCommunOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName={AppScreens.Feed}>
                <Tab.Screen name={AppScreens.Feed} component={Feed} options={ScreenCommunOptions} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
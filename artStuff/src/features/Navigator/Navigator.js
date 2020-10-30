import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
    StyledTabIcon
} from "./styles";

import Feed, { FeedScreenData } from "../Feed/Feed";
import Profile, { ProfileScreenData } from "../Profile/Profile";

import Colors from "../../shared/utils/constants/Colors";

const Tab = createBottomTabNavigator();

const Screens = [
    FeedScreenData,
    ProfileScreenData,
];

const Navigator = () => {

    const getScreenOptions = ({ route }) => {
        const options = {
            tabBarIcon: ({ focused }) => {
                return getScreenIcon(focused, route.name);
            },
        };

        return options;
    };

    const getScreenIcon = (isActive, name) => {
        const screenData = Screens.find(screen => screen.name === name);
        let screenIcon = isActive && screenData ? screenData.enableIcon : screenData.disableIcon;

        return (<StyledTabIcon source={screenIcon} />);
    };

    const tabBarOptions = {
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          backgroundColor: Colors.White,
        },
    };

    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={getScreenOptions}
                tabBarOptions={tabBarOptions}
                initialRouteName={FeedScreenData.name}>
                
                <Tab.Screen name={FeedScreenData.name} component={Feed} />
                <Tab.Screen name={ProfileScreenData.name} component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
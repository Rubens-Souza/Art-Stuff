import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
    StyledTabIcon
} from "./styles";

import Feed, { FeedTabData } from "../Feed/Feed";
import Profile, { ProfileTabData } from "../Profile/Profile";
import AddArt, { AddArtTabData } from "../AddArt/AddArt";

import Colors from "../../shared/utils/constants/Colors";

const Tab = createBottomTabNavigator();

const Tabs = [
    FeedTabData,
    ProfileTabData,
    AddArtTabData,
];

const Navigator = () => {

    const getScreenOptions = ({ route }) => {
        const options = {
            tabBarIcon: ({ focused }) => {
                return getTabIcon(focused, route.name);
            },
        };

        return options;
    };

    const getTabIcon = (isActive, name) => {
        const tabData = Tabs.find(tab => tab.name === name);
        let tabIcon = isActive && tabData ? tabData.enableIcon : tabData.disableIcon;

        return (<StyledTabIcon source={tabIcon} />);
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
                initialRouteName={FeedTabData.name}>
                
                <Tab.Screen name={FeedTabData.name} component={Feed} />
                <Tab.Screen name={AddArtTabData.name} component={AddArt} />
                <Tab.Screen name={ProfileTabData.name} component={Profile} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
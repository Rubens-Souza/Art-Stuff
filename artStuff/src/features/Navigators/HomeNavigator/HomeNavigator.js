import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
    StyledTabIcon
} from "./styles";

import Header from "../../Header/Header";

import Feed, { FeedTabData } from "../../Feed/Feed";
import Profile, { ProfileTabData } from "../../Profile/Profile";
import AddArt, { AddArtTabData } from "../../AddArt/AddArt";

import Colors from "../../../shared/utils/constants/Colors";

import ScreenData from "../../../shared/dtos/ScreenData";

const Tab = createBottomTabNavigator();

const Tabs = [
    FeedTabData,
    ProfileTabData,
    AddArtTabData,
];

const HomeNavigator = () => {

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
        <React.Fragment>
            <Header />
            <Tab.Navigator 
                screenOptions={getScreenOptions}
                tabBarOptions={tabBarOptions}
                initialRouteName={FeedTabData.name}>
                
                <Tab.Screen name={FeedTabData.name} component={Feed} />
                <Tab.Screen name={AddArtTabData.name} component={AddArt} />
                <Tab.Screen name={ProfileTabData.name} component={Profile} />
            </Tab.Navigator>
        </React.Fragment>
    );
};

export const HomeNavigatorScreenData = new ScreenData(HomeNavigator.name);
export default HomeNavigator;
import React from "react";

import {
    DefaultBlackButton,
    DefaultBlackButtonText
} from "../../shared/components/CommunStyles/CommunStyles";

import {
    StyledProfileSafeAreaView,
    StyledUserImage,
    StyledUserName,
    StyledUserDataView,
    StyledUserEmailText
} from "./styles";

import Icons from "../../shared/utils/constants/Icons";

import TabData from "../../shared/dtos/TabData";

const Profile = () => {

    // TODO: Get user data from Redux
    const userGravatarAcessData = {
        email: "fake.person.job@gmail.com",
        secure: true,
    };

    const logout = () => {
        // TODO: Implement logout function
    };

    return (
        <StyledProfileSafeAreaView>
            <StyledUserDataView>
                <StyledUserImage options={userGravatarAcessData} />
                <StyledUserName>Fake Person</StyledUserName>
                <StyledUserEmailText>fake.person.job@gmail.com</StyledUserEmailText>
            </StyledUserDataView>

            <DefaultBlackButton onPress={logout}>
                <DefaultBlackButtonText>
                    Logout
                </DefaultBlackButtonText>
            </DefaultBlackButton>
        </StyledProfileSafeAreaView>
    );
};

export const ProfileTabData = new TabData(Profile.name, Icons.ProfileFill, Icons.Profile);
export default Profile;
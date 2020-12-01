import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logoutActiveUser } from "../../redux/User/UserOperations";

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
    const userData = useSelector((state) => state.UserReducer.userData);
    const dispatch = useDispatch();

    const userGravatarAcessData = {
        email: userData.email,
        secure: true,
    };

    const handleLogout = () => {
        dispatch(logoutActiveUser());
    };

    return (
        <StyledProfileSafeAreaView>
            <StyledUserDataView>
                <StyledUserImage options={userGravatarAcessData} />
                <StyledUserName>{userData.nickName}</StyledUserName>
                <StyledUserEmailText>{userData.email}</StyledUserEmailText>
            </StyledUserDataView>

            <DefaultBlackButton onPress={handleLogout}>
                <DefaultBlackButtonText>
                    Logout
                </DefaultBlackButtonText>
            </DefaultBlackButton>
        </StyledProfileSafeAreaView>
    );
};

export const ProfileTabData = new TabData(Profile.name, Icons.ProfileFill, Icons.Profile);
export default Profile;
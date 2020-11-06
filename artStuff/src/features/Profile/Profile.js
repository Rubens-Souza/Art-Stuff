import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";

import { handleLogout } from "../../redux/User/UserOperations";

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

const Profile = ({
    userData,
    onLogout,
}) => {

    const userGravatarAcessData = {
        email: userData.email,
        secure: true,
    };

    const logout = () => {
        onLogout();
    };

    return (
        <StyledProfileSafeAreaView>
            <StyledUserDataView>
                <StyledUserImage options={userGravatarAcessData} />
                <StyledUserName>{userData.nickName}</StyledUserName>
                <StyledUserEmailText>{userData.email}</StyledUserEmailText>
            </StyledUserDataView>

            <DefaultBlackButton onPress={logout}>
                <DefaultBlackButtonText>
                    Logout
                </DefaultBlackButtonText>
            </DefaultBlackButton>
        </StyledProfileSafeAreaView>
    );
};

Profile.propTypes = {
    onLogout: PropTypes.func.isRequired,
    userData: PropTypes.object.isRequired,
};

const mapStateToProps = ({
    UserReducer
}) => ({
    userData: UserReducer.userData,
});

const mapDispatchToProps = {
    onLogout: handleLogout,
};

const connectToRedux = compose(connect(mapStateToProps, mapDispatchToProps));

export const ProfileTabData = new TabData(Profile.name, Icons.ProfileFill, Icons.Profile);
export default connectToRedux(Profile);
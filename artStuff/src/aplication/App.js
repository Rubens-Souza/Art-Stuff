import React from 'react';
import axios from "axios";

import {
  StyledSafeAreaView
}from "./styles";

import RootNavigator from "../features/Navigators/RootNavigator/RootNavigator";

import { BASE_URL_FIREBASE } from "../shared/utils/constants/Urls";

axios.defaults.baseURL = BASE_URL_FIREBASE;

const App = () => {

  return (
    <React.Fragment>
      <StyledSafeAreaView>
          <RootNavigator />
      </StyledSafeAreaView>
    </React.Fragment>
  );
};

export default App;

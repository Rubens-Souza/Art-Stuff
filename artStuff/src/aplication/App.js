import React from 'react';

import {
  StyledSafeAreaView
}from "./styles";

import RootNavigator from "../features/Navigators/RootNavigator/RootNavigator";

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

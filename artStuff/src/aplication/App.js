import React from 'react';

import {
  StyledSafeAreaView
}from "./styles";

import Navigator from "../features/Navigator/Navigator";

const App = () => {

  return (
    <React.Fragment>
      <StyledSafeAreaView>
          <Navigator />
      </StyledSafeAreaView>
    </React.Fragment>
  );
};

export default App;

import React from 'react';

import {
  StyledSafeAreaView
}from "./styles";

import Header from "../features/Header/Header";
import Navigator from "../features/Navigator/Navigator";

const App = () => {

  return (
    <React.Fragment>
      <StyledSafeAreaView>
          <Header />
          <Navigator />
      </StyledSafeAreaView>
    </React.Fragment>
  );
};

export default App;

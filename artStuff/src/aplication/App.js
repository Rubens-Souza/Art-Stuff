import React from 'react';

import {
  StyledSafeAreaView
}from "./styles";

import Header from "../features/Header/Header";
import Feed from "../features/Feed/Feed";

const App = () => {

  return (
    <React.Fragment>
      <StyledSafeAreaView>
          <Header />
          <Feed />
      </StyledSafeAreaView>
    </React.Fragment>
  );
};

export default App;

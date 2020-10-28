import React from 'react';

import {
  StyledSafeAreaView
}from "./styles";

import Header from "../features/Header/Header";
import Post from "../shared/components/Post/Post";

import Image from "../../assets/imgs/art-test.jpg";

const App = () => {
  return (
    <React.Fragment>
      <StyledSafeAreaView>
        <Header />
        <Post artImage={Image} userName={"Fake Peson"} email={"fake.person.job@gmail.com"}/>
      </StyledSafeAreaView>
    </React.Fragment>
  );
};

export default App;

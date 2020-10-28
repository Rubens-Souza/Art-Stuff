import React from 'react';

import {
  StyledSafeAreaView
}from "./styles";

import Header from "../features/Header/Header";
import Post from "../shared/components/Post/Post";

import Image from "../../assets/imgs/art-test.jpg";

import UserData from "../shared/dtos/UserData";
import PostData from "../shared/dtos/PostData";

const App = () => {

  const fakePerson = new UserData("fake.person.job@gmail.com", "Fake Person");
  const post = new PostData(fakePerson, "Flying", Image, []);

  return (
    <React.Fragment>
      <StyledSafeAreaView>
        <Header />
        <Post postData={post}/>
      </StyledSafeAreaView>
    </React.Fragment>
  );
};

export default App;

import React from 'react';
import { SafeAreaView } from 'react-native';

import Header from "./src/features/Header/Header";

const App = () => {
  return (
    <React.Fragment>
      <SafeAreaView>
        <Header />
      </SafeAreaView>
    </React.Fragment>
  );
};

export default App;

import React from "react";
import 'react-native-gesture-handler';
import { Provider } from "react-redux";
import { AppRegistry } from 'react-native';

import { name as appName } from './app.json';

import App from './src/aplication/App';
import StoreConfig from "./src/store/StoreConfig";

const store = StoreConfig();

const ReduxProvider = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => ReduxProvider);
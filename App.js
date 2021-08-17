import { NativeBaseProvider } from "native-base";
import { StatusBar } from "react-native";
import React from "react";
import Flow from "./src/pantallas/Flow";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <StatusBar backgroundColor="#6F55D2" />
        <Flow />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;

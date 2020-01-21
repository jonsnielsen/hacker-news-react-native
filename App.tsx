import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Layout from "./src/components/layout";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./src/navigation/Navigator";
import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "./src/theme/theme";
import { createStore, applyMiddleware } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { rootReducer, rootSaga } from "./src/store";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const fetchFonts = () => {
  return Font.loadAsync({
    roboto: require("./src/assets/fonts/roboto/Roboto-Regular.ttf"),
    "roboto-medium": require("./src/assets/fonts/roboto/Roboto-Medium.ttf"),
    "roboto-bold": require("./src/assets/fonts/roboto/Roboto-Bold.ttf"),
    "roboto-mono": require("./src/assets/fonts/roboto-mono/RobotoMono-Regular.ttf")
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Navigator />
      </ThemeProvider>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

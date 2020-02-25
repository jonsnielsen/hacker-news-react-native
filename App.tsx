import React, { useState, useContext } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./src/navigation/Navigator";
import { lightTheme, darkTheme } from "./src/theme/theme";
import { createStore, applyMiddleware } from "redux";
import { Provider as ReduxProvider } from "react-redux";
import { rootReducer, rootSaga } from "./src/store";
import createSagaMiddleware from "redux-saga";
import { ToggleThemeContext } from "./src/theme/ToggleTheme";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

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
  const [isLightTheme, setIsLightTheme] = useState(true);

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
      {/* <ThemeProvider theme={isLightTheme ? lightTheme : darkTheme}> */}
      <ToggleThemeContext.Provider
        value={{
          isLightTheme,
          toggleTheme: () => setIsLightTheme(prev => !prev)
        }}
      >
        <PaperProvider theme={isLightTheme ? lightTheme : darkTheme}>
          <Navigator />
        </PaperProvider>
      </ToggleThemeContext.Provider>
      {/* </ThemeProvider> */}
    </ReduxProvider>
  );
}

import "@tensorflow/tfjs-react-native";
import React, { useEffect } from "react";
import { Platform, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Host } from "react-native-portalize";
import * as tf from "@tensorflow/tfjs";

import { store } from "./store";
import { useAppDispatch } from "./hooks";
import { AppStack } from "./navigation";
import { setModelInitialized } from "./store/model/slice";

const Root = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      await tf.ready();
      dispatch(setModelInitialized({ initialized: true }));
    })();
  }, []);
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </>
  );
};

const App = () => {
  const [loaded] = useFonts({
    ["Roboto-Black"]: require("./assets/fonts/Roboto-Black.ttf"),
    ["Roboto-BlackItalic"]: require("./assets/fonts/Roboto-BlackItalic.ttf"),
    ["Roboto-Bold"]: require("./assets/fonts/Roboto-Bold.ttf"),
    ["Roboto-BoldItalic"]: require("./assets/fonts/Roboto-BoldItalic.ttf"),
    ["Roboto-Italic"]: require("./assets/fonts/Roboto-Italic.ttf"),
    ["Roboto-Light"]: require("./assets/fonts/Roboto-Light.ttf"),
    ["Roboto-LightItalic"]: require("./assets/fonts/Roboto-LightItalic.ttf"),
    ["Roboto-Medium"]: require("./assets/fonts/Roboto-Medium.ttf"),
    ["Roboto-MediumItalic"]: require("./assets/fonts/Roboto-MediumItalic.ttf"),
    ["Roboto-Regular"]: require("./assets/fonts/Roboto-Regular.ttf"),
    ["Roboto-Thin"]: require("./assets/fonts/Roboto-Thin.ttf"),
    ["Roboto-ThinItalic"]: require("./assets/fonts/Roboto-ThinItalic.ttf"),
    ["RobotoCondensed-Bold"]: require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    ["RobotoCondensed-BoldItalic"]: require("./assets/fonts/RobotoCondensed-BoldItalic.ttf"),
    ["RobotoCondensed-Italic"]: require("./assets/fonts/RobotoCondensed-Italic.ttf"),
    ["RobotoCondensed-Light"]: require("./assets/fonts/RobotoCondensed-Light.ttf"),
    ["RobotoCondensed-LightItalic"]: require("./assets/fonts/RobotoCondensed-LightItalic.ttf"),
    ["RobotoCondensed-Regular"]: require("./assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <Host>
        <Root />
      </Host>
    </Provider>
  );
};

export default App;

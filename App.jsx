import Navigation from "./Navigation";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Provider } from 'react-redux';
import { store } from "./store";


SplashScreen.preventAutoHideAsync();

export default function App() {

  let [fontLoaded] = useFonts({
    // "Light": require("./assets/fonts/Rubik-Light.ttf"),
    // "Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    // "Medium": require("./assets/fonts/Rubik-Medium.ttf"),
    // "RBold": require("./assets/fonts/Rubik-Bold.ttf"),
    // "SemiBold": require("./assets/fonts/Rubik-SemiBold.ttf"),
    // "Black": require("./assets/fonts/Rubik-Black.ttf"),
    "Light": require("./assets/fonts/DMSans-Light.ttf"),
    "Regular": require("./assets/fonts/DMSans-Regular.ttf"),
    "Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "SemiBold": require("./assets/fonts/DMSans-SemiBold.ttf"),
    "Black": require("./assets/fonts/DMSans-Black.ttf"),
    "ExtraBold": require("./assets/fonts/DMSans-ExtraBold.ttf"),
  });

  if (!fontLoaded) {
    SplashScreen.preventAutoHideAsync().then(() => {
      SplashScreen.hideAsync();
    });
    return null;
  }

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  )
};
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import RootNavigator from "./src/navigation";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    AvenirBold: require("./src/assets/fonts/AvenirLTStd-Bold.otf"),
    AvenirMedium: require("./src/assets/fonts/AvenirLTStd-Medium.otf"),
    AvenirRegular: require("./src/assets/fonts/AvenirLTStd-Regular.otf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <>
      <RootNavigator onReady={onLayoutRootView} />
    </>
  );
}

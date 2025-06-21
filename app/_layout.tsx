import { Slot } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "DynaPuff": require("../assets/fonts/DynaPuff.ttf"),
    "DynaPuff-Bold": require("../assets/fonts/DynaPuff-Bold.ttf"),
    "DynaPuff-SemiBold": require("../assets/fonts/DynaPuff-SemiBold.ttf"),
    "DynaPuff-Medium": require("../assets/fonts/DynaPuff-Medium.ttf"),
    "Barlow-Medium": require("../assets/fonts/Barlow-Medium.ttf"),
    "Barlow-Regular": require("../assets/fonts/Barlow-Regular.ttf"),
    "Barlow-SemiBold": require("../assets/fonts/Barlow-SemiBold.ttf"),
    "Barlow-ExtraBold": require("../assets/fonts/Barlow-ExtraBold.ttf"),
  });
  
    useEffect(() => {
      if (loaded || error) {
        SplashScreen.hideAsync();
      }
    }, [loaded, error]);
  
    if (!loaded && !error) {
      return null; // Prevents rendering while fonts are loading
    }
  return <Slot />;
}

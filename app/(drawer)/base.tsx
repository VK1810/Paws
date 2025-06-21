import { 
  View, 
  StyleSheet, 
  StatusBar 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import BackgroundBlob from "../../components/backgroundBlob";

export default function Home() {

  useEffect(() => {
    StatusBar.setBarStyle("light-content"); // Make status bar text white
    StatusBar.setTranslucent(true); // Remove status bar padding
    StatusBar.setBackgroundColor("transparent"); // Ensure it blends with the background
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <BackgroundBlob />
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>

        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0, // Removes padding caused by SafeAreaView
  },
});

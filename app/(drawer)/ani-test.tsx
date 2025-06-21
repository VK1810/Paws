import { 
  Text, 
  View, 
  StyleSheet, 
  StatusBar 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import BackgroundBlob from "../../components/backgroundBlob";
import LoadingAnimation from "../../components/loadingAnimation";

export default function AniTest() {
  useEffect(() => {
    StatusBar.setBarStyle("light-content"); 
    StatusBar.setTranslucent(true); 
    StatusBar.setBackgroundColor("transparent"); 
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <BackgroundBlob />
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            <LoadingAnimation size = {100} />
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
});

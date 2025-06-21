import React from "react";
import { 
  useWindowDimensions, 
  Image, 
  StyleSheet, 
  View 
} from "react-native";

export default function BackgroundBlob() {
  const { width, height } = useWindowDimensions();

  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      <Image
        source={require("../assets/images/dog1+blob1.png")}
        style={[
          styles.image,
          {
            position: "absolute",
            top: 0,
            right: -width *  0.20,
            height: height * 0.37,
          },
        ]}
        resizeMode="contain"
      />
      <Image
        source={require("../assets/images/blob5.png")}
        style={[
          styles.image,
          {
            position: "absolute",
            bottom: -width * 0.13,
            right: -width * 0.005,
            height: height * 0.23,
          },
        ]}
        resizeMode="contain"
      />
      <Image
        source={require("../assets/images/dog3-blob3.png")}
        style={[
          styles.image,
          {
            position: "absolute",
            bottom: 0,
            left: -width * 0.03,
            height: height * 0.12,
          },
        ]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: undefined,
    aspectRatio: 1, 
  },
});

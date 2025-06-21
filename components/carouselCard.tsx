import { 
  ImageBackground, 
  StyleSheet, 
  Text, 
  View, 
  Dimensions 
} from "react-native";
import React from "react";
import colours from "../utils/colours";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8;

export default function CarouselCard({ item }: { item: { key: string; title: string } }) {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={require("../assets/images/paw-pattern.jpg")}
        style={styles.imageBackgroundStyle}
        imageStyle={styles.imageStyle}
      >
        <Text style={styles.cardText}>{item.title}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: CARD_WIDTH,
    height: 120,
  },
  imageBackgroundStyle: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    justifyContent: "center",
    padding: 10,
  },
  imageStyle: {
    borderRadius: 20,
  },
  cardText: {
    fontSize: 14,
    color: colours.white,
    fontFamily: "DynaPuff",
    textAlign: "center",
  },
});

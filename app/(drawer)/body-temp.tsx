import { 
  KeyboardAvoidingView, 
  Image, 
  Text, 
  View, 
  StyleSheet, 
  StatusBar 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { 
  useEffect, 
  useLayoutEffect
} from "react";
import { useNavigation } from "expo-router";
import colours from "../../utils/colours";
import BackgroundBlob from "../../components/backgroundBlob";
import TempInput from "../../components/tempInput";

const pawBG = require("../../assets/images/paw-pattern.jpg")
const beigePaw = require("../../assets/images/beigepaw.png")
const brownPaw = require("../../assets/images/brownpaw.png")

export default function Home() {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  
  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor("transparent");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <BackgroundBlob />
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]} />
      <Text style = {styles.bodyTemp}>BODY TEMPERATURE</Text>
      <Text style = {styles.input}>Input your dog's temperature:</Text>
      <Image source = {beigePaw} style={styles.beigePaw_style_1} />
      <Image source = {beigePaw} style={styles.beigePaw_style_2} />
      <Image source = {brownPaw} style={styles.brownPaw_style_1} />
      <Image source = {brownPaw} style={styles.brownPaw_style_2} />

      <KeyboardAvoidingView>
      <Image source={pawBG} style={styles.tempCard} />
      <TempInput />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    margin: 0,
  },

  bodyTemp: {
    position: "absolute",
    fontFamily: "DynaPuff-Bold",
    fontSize: 22,
    color: colours.darkBrown,
    marginLeft: 20,
    marginTop: 110,
  },

  input: {
    position: "absolute",
    fontFamily: "Barlow-SemiBold",
    fontSize: 13,
    color: colours.darkBrown,
    marginLeft: 20,
    marginTop: 150,
  },

  tempCard: {
    borderRadius: 12,
    maxHeight: 200,
    flex: 1,
    width: 350,
    alignSelf: 'center',
    marginTop: -450,
    borderWidth: 4,
    borderColor: colours.darkBeige,
  },

  beigePaw_style_1: {
    position: "absolute",
    height: 130,
    width: 130,
    marginTop: 190,
    marginLeft: -55,
  },

  brownPaw_style_2: {
    position: "absolute",
    height: 80,
    width: 80,
    marginTop: 550,
    marginLeft: 320,
  },

  brownPaw_style_1: {
    position: "absolute",
    height: 60,
    width: 60,
    marginTop: 270,
    marginLeft: 50,
  },

  beigePaw_style_2: {
    position: "absolute",
    height: 40,
    width: 40,
    marginTop: 620,
    marginLeft: 320,
  }
});
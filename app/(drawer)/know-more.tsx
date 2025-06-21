import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  StatusBar,
  Alert 
} from "react-native";
import { Image } from 'expo-image';
import { 
  useEffect, 
  useLayoutEffect,  
} from "react";
import { useNavigation } from "expo-router";
import colours from "@/utils/colours";

const pawBG = require("../../assets/images/paw+white.png")

const beigeCircle = require("../../assets/images/circle_2.png")
const brownCircle = require("../../assets/images/circle_1.png")
const pawBeige = require("../../assets/images/paw_with_bg.png")
const pawBrown = require("../../assets/images/paw_with_bg-1.png")
const dogs = require("../../assets/images/dogset1.png")


export default function Home() {
  const navigation = useNavigation();
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);
  
  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor("transparent");
  }, []);
    

  return (
    <View style={{ flex: 1 }}>
      <Image source = {pawBG} style = {styles.paw_BG} />

      <Image source = {beigeCircle} style = {styles.beige_circle1} />
      <Image source = {beigeCircle} style = {styles.beige_circle2} />  
      <TouchableOpacity>
      <Image source = {pawBrown} style = {styles.paw_brown} />   
      </TouchableOpacity>



      <Image source = {brownCircle} style = {styles.brown_circle1} />
      <Image source = {brownCircle} style = {styles.brown_circle2} />
      <TouchableOpacity>
      <Image source = {pawBeige} style = {styles.paw_beige} />   
      </TouchableOpacity>

      <Text style = {styles.gr8paws}>Introducing Gr8Paws!</Text>
      <Text style = {styles.body_text}>Our app is designed to help pet owners monitor and maintain their pet's health with ease.{"\n\n"}
      
      Key features include:Breed Check, Weight Check, Heart Check, Location Tracking, Panting Count, Rib Compression Count, Body Temperature Monitoring and Vet Connect.{"\n\n"}
      
      With smart insights and easy-to-use tools, you can stay on top of your pet’s well-being anytime, anywhere!</Text>

      <Image source = {dogs} style = {styles.dogs}/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    margin: 0,
  },
  
  paw_BG: {
    width: 390,
    height: 830,
    position:"absolute",
  },

  gr8paws: {
    position: "absolute",
    fontFamily: "DynaPuff-SemiBold",
    fontSize: 26,
    color: colours.darkBeige,
    marginLeft: 45,
    marginTop: 80,
  },

  body_text: {
    position: "absolute",
    fontFamily: "Barlow-SemiBold",
    fontSize: 14,
    color: colours.darkBrown,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 300,
    textAlign: "justify",
  },

  beige_circle1: {
    position:"absolute",
    width: 12,
    height: 12,
    marginLeft: 325,
    marginTop: 210,
  },

  beige_circle2: {
    position:"absolute",
    width: 25,
    height: 25,
    marginLeft: 315,
    marginTop: 230,
  },

  paw_brown: {
    position:"absolute",
    width: 98,
    height: 98,
    marginLeft: 225,
    marginTop: 175,
  },

  brown_circle1: {
    width: 22,
    height: 22,
    marginLeft: 60,
    marginTop: 200,
  },
  
  brown_circle2: {
    width: 12,
    height: 12,
    marginLeft: 85,
    marginTop: -30,
  },

  paw_beige: {
    position:"absolute",
    width: 100,
    height: 100,
    marginLeft: 70,
    marginTop: -15,
  },

  dogs: {
    width: 390,
    height: 200,
    position:"absolute",
    marginTop: 525,
    marginLeft: -5,
  }
});



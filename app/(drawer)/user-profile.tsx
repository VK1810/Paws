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
  useState 
} from "react";
import { 
  useNavigation, 
  useRouter 
} from "expo-router";
import colours from "@/utils/colours";
import * as ImagePicker from 'expo-image-picker';
import axios from "axios";  
import Constants from "expo-constants";

const API_BASE_URL = Constants.expoConfig?.extra?.API_BASE_URL;


const pawBG = require("../../assets/images/paw+white.png")
const plus = require("../../assets/images/plus2.png")
const beigeCircle = require("../../assets/images/circle_2.png")
const userProfile1 = require("../../assets/images/user2.png")
const brownCircle = require("../../assets/images/circle_1.png")
const pawBeige = require("../../assets/images/paw_with_bg.png")
const userProfile2 = require("../../assets/images/user3.png")
const paw = require("../../assets/images/paws.png")
const home = require("../../assets/images/home-address.png")
const contact = require("../../assets/images/phone.png")
const logout = require("../../assets/images/out.png")
const arrow = require("../../assets/images/right-arrow.png")

export default function Home() {
  const navigation = useNavigation();
  const [image, setImage] = useState<string | null>(null);

  const router = useRouter();

  // Function to handle logout API call
  const handleSignOut = async () => {
    Alert.alert("Sign Out", "Are you sure you want to sign out?", [
      { text: "Cancel", style: "cancel" },
      { 
        text: "Yes", 
        onPress: async () => {
          try {
            // Call the logout API
            const response = await axios.post(`${API_BASE_URL}/logout`); 
            console.log("Logout success:", response.data);

            // Redirect to the signin page after logging out
            router.replace("/");
          } catch (error) {
            console.error("Logout failed:", error);
            Alert.alert("Error", "Failed to log out. Please try again.");
          }
        } 
      }
    ]);
  };
  
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
    
  const handlePhotoLibrary = async () => {
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images','videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Image source = {pawBG} style = {styles.paw_BG} />

      <TouchableOpacity onPress={handlePhotoLibrary}>
      <Image source = {plus} style = {styles.plus_style}/>
      </TouchableOpacity>

      <Image source = {beigeCircle} style = {styles.beige_circle1} />
      <Image source = {beigeCircle} style = {styles.beige_circle2} />
      <Image source = {userProfile1} style = {styles.user1} />     
      <Image source = {brownCircle} style = {styles.brown_circle1} />
      <Image source = {brownCircle} style = {styles.brown_circle2} />
      <Image source = {pawBeige} style = {styles.paw_beige} />   
      

      <Text style = {styles.helloBuddy}>Hello Buddy!</Text>

     
      <TouchableOpacity onPress={() => router.push("/user-details")}>
        <Image source = {userProfile2} style = {styles.icon_style} />
        <Text style = {styles.details}>User details</Text>
        <Image source = {arrow} style = {styles.arrow_style} />
      </TouchableOpacity>

     
     <TouchableOpacity onPress={() => router.push("/dog-details")}>
        <Image source = {paw} style = {styles.icon_style} />
        <Text style = {styles.details}>Pet details</Text>
        <Image source = {arrow} style = {styles.arrow_style} />
      </TouchableOpacity>

    
      <TouchableOpacity>
        <Image source = {home} style = {styles.icon_style} />
        <Text style = {styles.details}>Address</Text>
        <Image source = {arrow} style = {styles.arrow_style} />
      </TouchableOpacity>

    
      <TouchableOpacity>
        <Image source = {contact} style = {styles.contact_icon} />
        <Text style = {styles.contact_details}>Contact us</Text>
        <Image source = {arrow} style = {styles.arrow_style} /> 
      </TouchableOpacity>    

   
      <TouchableOpacity onPress = {handleSignOut}>
        <Image source = {logout} style = {styles.icon_style} />
        <Text style = {styles.details}>Logout</Text>
        <Image source = {arrow} style = {styles.arrow_style} />
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={styles.image} />} 
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

  helloBuddy: {
    position: "absolute",
    fontFamily: "DynaPuff-SemiBold",
    fontSize: 24,
    color: colours.darkBeige,
    marginLeft: 27,
    marginTop: 90,
  },

  plus_style: {
    width: 100,
    height: 100,
    marginLeft: 220,
    marginTop: 180,
  },

  beige_circle1: {
    width: 12,
    height: 12,
    marginLeft: 310,
    marginTop: -60,
  },

  beige_circle2: {
    width: 25,
    height: 25,
    marginLeft: 310,
    marginTop: -50,
  },

  user1: {
    height: 150,
    width: 150,
    marginLeft: 220,
    marginTop: -175,
  },

  brown_circle1: {
    width: 22,
    height: 22,
    marginLeft: 60,
    marginTop: 15,
  },
  
  brown_circle2: {
    width: 12,
    height: 12,
    marginLeft: 83,
    marginTop: -30,
  },

  paw_beige: {
    width: 100,
    height: 100,
    marginLeft: 70,
    marginTop: -15,
  },

  icon_style:{
    width: 24,
    height: 24,
    marginTop: 40,
    marginLeft: 30,
  },

  details: {
    fontFamily: "Barlow-SemiBold",
    color: colours.darkBrown,
    fontSize: 17,
    marginTop: -25,
    marginLeft: 70,
  },

  contact_icon: {
    position:"absolute",
    width: 26,
    height: 26,
    marginTop: 40,
    marginLeft: 29,
  },

  contact_details:{
    fontFamily: "Barlow-SemiBold",
    color: colours.darkBrown,
    fontSize: 17,
    marginTop: 39,
    marginLeft: 70,
  },

  arrow_style: {
    position: "absolute",
    width: 20,
    height: 20,
    marginTop: 47,
    marginLeft: 330,
  },

  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colours.darkBeige,
    marginLeft: 215,
    marginTop: -583,
  },
});



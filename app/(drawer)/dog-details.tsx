import { 
  Text, 
  View, 
  StyleSheet, 
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput, 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import BackgroundBlob from "../../components/backgroundBlob";
import { 
    scale,
    verticalScale
} from "../../utils/scale";
import colours from "../../utils/colours";
import { 
    Stack,
    useRouter
} from "expo-router";

export default function DogDetails() {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');


  useEffect(() => {
    StatusBar.setBarStyle("light-content"); 
    StatusBar.setTranslucent(true); 
    StatusBar.setBackgroundColor("transparent"); 
  }, []);

  const router = useRouter();

  return (
    <>
    <Stack.Screen name="notifications" options={{ presentation: 'modal', title: "Dog Details", headerShown: false }} />
    <View style={{ flex: 1 }}>
      <BackgroundBlob />
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
            {/* Header */}
            <View style = {styles.header}>
                <TouchableOpacity onPress = { () => router.push("/user-profile")}>
                    <Image source={require("../../assets/images/left-arrow.png")} style = {styles.backIcon}/>
                </TouchableOpacity>
                <Text style = {styles.heading}>Edit profile</Text>
                <Image source={require("../../assets/images/left-arrow.png")} style = {styles.hiddenBackIcon }/>
            </View>

            {/* Profile */}
            <View style = {styles.profilePicture}>
                <TouchableOpacity style = {styles.profilePictureWrapper}>
                    <Image source = {require("../../assets/images/user.png")} style = {styles.profileIcon}/>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.addProfileWrapper}>
                    <Image source = {require("../../assets/images/plus.png")} style = {styles.addProfileIcon}/>
                </TouchableOpacity>
                
            </View>

            {/* Information */}
            <View style = {styles.informationSection}>
                <View style = {styles.informationWrapper}>
                    <Text style = {styles.informationHeading}>Name</Text>
                    <TextInput
                        style={styles.informationInput}
                        placeholder="Enter something..."
                        placeholderTextColor={colours.lightBeige}
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View style = {styles.informationWrapper}>
                    <Text style = {styles.informationHeading}>Breed</Text>
                    <TextInput
                        style={styles.informationInput}
                        placeholder="Enter something..."
                        placeholderTextColor={colours.lightBeige}
                        value={breed}
                        onChangeText={setBreed}
                    />
                </View>
                <View style = {styles.informationWrapper}>
                    <Text style = {styles.informationHeading}>Gender</Text>
                    <TextInput
                        style={styles.informationInput}
                        placeholder="Enter something..."
                        placeholderTextColor={colours.lightBeige}
                        value={gender}
                        onChangeText={setGender}
                    />
                </View>
                <View style = {styles.informationWrapper}>
                    <Text style = {styles.informationHeading}>Age</Text>
                    <TextInput
                        style={styles.informationInput}
                        placeholder="Enter something..."
                        placeholderTextColor={colours.lightBeige}
                        
                        value={age}
                        onChangeText={setAge}
                    />
                </View>
            </View>

            {/* Information */}
            <View style = {styles.saveButtonWrapper}>
                <TouchableOpacity style = {styles.saveButton}>
                    <Text style = {styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    gap: verticalScale(20),
  },

  backIcon: {
    width: scale(30),
    height: scale(30),
  },

  heading: {
    fontFamily: 'DynaPuff-Bold', 
    fontSize: scale(24),
    color: colours.darkBrown,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
  },

  hiddenBackIcon: {
    width: scale(30),
    height: scale(30),
    opacity: 0,
  },

  profileIcon: {
    width: scale(170),
    height: scale(170),
    borderColor: colours.darkBrown,
    borderWidth: 3,
    borderRadius: scale(170) / 2,
  },

  addProfileIcon: {
    width: scale(70),
    height: scale(70),
  },

  profilePicture:{
    paddingLeft: scale(25),
    flexDirection: 'row',
    alignItems: 'flex-end'
  },

  informationWrapper: {
    gap: verticalScale(5),
    paddingLeft: scale(20),
  },

  informationHeading: {
    fontFamily: "Barlow-Bold",
    fontSize: scale(20),
    color: colours.darkBrown,
  },

  informationInput: {
    height: verticalScale(50),
    borderColor: colours.lightBeige,
    borderWidth: scale(2),
    borderRadius: scale(10),
    paddingHorizontal: scale(15),
    marginRight: scale(20),
    fontSize: scale(16),
    color: colours.lightBeige,
    backgroundColor: colours.lightBrown,
  },

  informationSection: {
    gap: verticalScale(20),
  },

  saveButton: {
    height: verticalScale(50),
    width: scale(150),
    borderColor: colours.lightBeige,
    borderWidth: scale(2),
    borderRadius: scale(10),    
    backgroundColor: colours.darkBrown,
    alignItems: "center",
    justifyContent: "center",
  },

  saveButtonText: {
    fontSize: scale(20),
    fontFamily: "Barlow-Bold",
    color: colours.darkBeige,
    textAlign: "center",
  },

  saveButtonWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },

  addProfileWrapper: {
  },

  profilePictureWrapper: {
  },
});

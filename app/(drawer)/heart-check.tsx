import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  StatusBar,  
  TextInput, 
  Alert 
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { 
  useEffect, 
  useLayoutEffect, 
  useState,  
  useCallback 
 } from "react";
import { useNavigation } from "expo-router";
import colours from "../../utils/colours";
import { 
  scale, 
  verticalScale 
} from "../../utils/scale"; 
import BackgroundBlob from "../../components/backgroundBlob";
import { ResultCardHeart } from "../../components/resultcard";
import { FontAwesome } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';


export default function Home() {
  const navigation = useNavigation();
  const [Size, setSize]   = useState<'Size'|'Small'|'Medium'|'Large'>('Size');
  const [age, setAge] = useState("");
  const [result, setResult] = useState<any | null>(null);

  
  
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

  useFocusEffect(
    useCallback(() => {
      setSize('Size');
      setAge('');
    }, [])
  );

  const about_feature = () => {
    Alert.alert(
      'About',
      "To track your dog’s heart rate accurately, please tell us: \nDog size: Small, Medium, or Large \nDog’s age (in years)",
      [{
        text: 'Ok',
      }]
    );
  }
    
  return (
    <View style={{ flex: 1 }}>
      <BackgroundBlob />
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>

        {/* header */}
        <View style={styles.header}>
          <Text style={styles.heading}>Heart Check</Text>
          <View style={styles.subHeader}>
            <Text style={styles.subHeading}>Select your dog size:</Text>
            <TouchableOpacity onPress = {() => about_feature()}>
              <FontAwesome name="question-circle" size={20} color={colours.darkBrown} />
            </TouchableOpacity>
          </View>
        </View>

        {/* input */}
        <View style={styles.inputWrapper}>

          {/* size Drop down */}
          <View style={styles.dropDownWrapper}>
            <Picker
              selectedValue={Size}
              onValueChange={setSize}
              mode="dropdown"
              dropdownIconColor={colours.darkBrown}
              style={styles.picker}
            >
              <Picker.Item label="Size" value="Size" enabled={false} />
              <Picker.Item label="Small" value="Small"  style={styles.picker}/>
              <Picker.Item label="Medium" value="Medium"  style={styles.picker}/>
              <Picker.Item label="Large" value="Large"  style={styles.picker}/>
            </Picker>        
          </View>

          {/* Age input */}
          <TextInput
            style={styles.ageInput}
            placeholder="Age"
            placeholderTextColor={colours.lightBrown}
            keyboardType="numeric"
            value={age}
            onChangeText={setAge}
          >
          </TextInput>
        </View>

        {/*Result*/}
        <View style={styles.result}>
          <ResultCardHeart/>
        </View>

      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    margin: 0,
  },

  heading: {
    fontFamily: "DynaPuff-Bold",
    fontSize: scale(20),
    color: colours.darkBrown,
  },

  header: {
    marginLeft: scale(20),
    marginTop: verticalScale(80),
  },

  subHeading: {
    fontFamily: "Barlow-SemiBold",
    fontSize: scale(13),
    color: colours.darkBrown,
  },

  subHeader: {
    flexDirection: "row",
    gap: scale(5),
  },

  dropDownWrapper: {
    height: verticalScale(50), 
    width: verticalScale(150),
    borderWidth: 1,
    borderColor: colours.darkBrown,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: colours.white,
  },

  picker: {
    color: colours.darkBrown,
    width: '100%',
  },

  inputWrapper: {
    flexDirection: "row",
    backgroundColor: colours.darkBrown,
    borderWidth: 1,
    borderColor: colours.darkBeige,
    borderRadius: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "flex-start",
    marginLeft: scale(20),
    marginTop: verticalScale(20),
    padding: scale(15),
    gap: scale(15),
  },

  ageInput: {
    backgroundColor: colours.white,
    borderWidth: 1,
    borderColor: colours.darkBrown,
    borderRadius: 8,
    justifyContent: 'center',
    height: verticalScale(50), 
    width: verticalScale(50),
  },

  result: {
    alignItems: "center",
    marginTop: verticalScale(30),
  },

});
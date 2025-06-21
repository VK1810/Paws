import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  StatusBar
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Image } from 'expo-image';
import { SafeAreaView } from "react-native-safe-area-context";
import { 
  useEffect, 
  useLayoutEffect, 
  useState, 
  useCallback 
} from "react";
import { useNavigation } from "expo-router";
import colours from "../../utils/colours";
import BackgroundBlob from "../../components/backgroundBlob";
import Card from "../../components/pluscard";
import { ResultCardWeight } from "../../components/resultcard";


const Plusimage = require("../../assets/images/plus.png");

export default function WeightCheck() {
  const navigation = useNavigation();
  const [showCard, setShowCard] = useState(false);
  const [plusMoved, setPlusMoved] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [isLoadingModalVisible, setIsLoadingModalVisible] = useState(false);
 
  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      // Do nothing when screen is focused
  
      return () => {
        // Cleanup when screen is unfocused
        setResult(null);
        setShowCard(false);
        setPlusMoved(false);
      };
    }, [])
  );

  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor("transparent");
  }, []);

  const handlePlusPress = () => {
    // Simply toggle the state to control positioning with CSS
    setPlusMoved(!plusMoved);
    setShowCard(!showCard);
  };

  const handlePlusCardChange = () => {
    setIsLoadingModalVisible(true); // Show modal when PlusCard triggers it
  };
    
  return (
    <View style={{ flex: 1 }}>
      <BackgroundBlob />
      <SafeAreaView style={styles.container} edges={["top", "left", "right"]} />
      <Text style={styles.pantingcount}>Weight Check</Text>
      <Text style={styles.uploadvideo}>Upload a photo of your dog here:</Text>
      
      {/* Use regular View with conditional styling instead of Animated.View */}
      <View style={[
        styles.plusWrapper,
        plusMoved ? styles.plusWrapperMoved : null
      ]}>
        <TouchableOpacity onPress={handlePlusPress}>
          <Image 
            source={Plusimage} 
            style={[
              styles.plus,
              plusMoved ? styles.plusSmall : null
            ]} 
            contentFit="contain" 
          />
        </TouchableOpacity>
      </View>
      
      {showCard && (
        <View style={styles.cardContainer}>
          <Card mode="photo" feature= "weight" onPredictionResult={setResult} resetTrigger={!showCard} onTriggerChange={handlePlusCardChange}/>
        </View>
      )}
      {result && result.prediction && (
        <ResultCardWeight
        user={result.prediction.user}
        weight={result.prediction.weight}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    margin: 0,
  },
  pantingcount: {
    position: "absolute",
    fontFamily: "DynaPuff-Bold",
    fontSize: 22,
    color: colours.darkBrown,
    marginLeft: 20,
    marginTop: 110,
  },
  uploadvideo: {
    position: "absolute",
    fontFamily: "Barlow-SemiBold",
    fontSize: 13,
    color: colours.darkBrown,
    marginLeft: 20,
    marginTop: 150,
  },
  plus: {
    width: 400,
    height: 400,
    marginLeft: -65,
    marginTop: -60,
  },
  plusSmall: {
    width: 100,
    height: 100,
    marginLeft: -15,
    marginTop: -15,
  },
  plusWrapper: {
    position: "absolute",
    marginTop: 250,
    marginLeft: 50,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  plusWrapperMoved: {
    marginTop: 190,
    marginLeft: 13,
    zIndex: 998,
  },
  cardContainer: {
    position: "absolute",
    top: 3,
    left: 190,
    zIndex: 999,
  }
});
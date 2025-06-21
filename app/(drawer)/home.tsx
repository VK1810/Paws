import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  StatusBar, 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import colours from "../../utils/colours";  // Import colors
import BackgroundBlob from "../../components/backgroundBlob";
import AnimatedCarousel from "../../components/animatedCarousel";
import { 
  scale, 
  verticalScale 
} from "../../utils/scale";

export default function Home() {
    const router = useRouter();

  useEffect(() => {
    StatusBar.setBarStyle("light-content"); // Make status bar text white
    StatusBar.setTranslucent(true); // Remove status bar padding
    StatusBar.setBackgroundColor("transparent"); // Ensure it blends with the background
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <BackgroundBlob />
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>

          {/* Header */}
          <View style = {styles.header}>
            <Text style = {styles.header1}>
              THE DESTINATION FOR PET HEALTHCARE
            </Text>
            <Text style = {styles.header2}>
            A pet owner’s dream app to take care of their pet’s health.
            </Text>
            <TouchableOpacity style = {styles.headerButton} onPress={() => router.replace("/know-more")}>
              <Text style={styles.headerButtonText}>Know more...</Text>
            </TouchableOpacity>
          </View>

          {/* Feature Buttons */}
          <View style = {styles.featureButtons}>
            <View style = {styles.featureItem}>
              <TouchableOpacity style = {styles.featureButtonPart} onPress = {() => router.push("/breed-check")}>
                <FontAwesome name="paw" style={styles.featureIcon1} />
              </TouchableOpacity>
              <Text style = {styles.featureButtonText}>Breed Check</Text>
            </View>
            <View style = {styles.featureItem}>
              <TouchableOpacity style = {styles.featureButtonPart} onPress = {() => router.push("/weight-check")}>
                <FontAwesome name="paw" style={styles.featureIcon2} />
              </TouchableOpacity>
              <Text style = {styles.featureButtonText}>Weight Check</Text>
            </View>
            <View style = {styles.featureItem}>
              <TouchableOpacity style = {styles.featureButtonPart} onPress={() => router.push("/heart-check")}>
                <FontAwesome name="paw" style={styles.featureIcon1} />
              </TouchableOpacity>
              <Text style = {styles.featureButtonText}>Heart Check</Text>
            </View>
            <View style = {styles.featureItem}>
              <TouchableOpacity style = {styles.featureButtonPart} onPress={() => router.push("/location")}>
                <FontAwesome name="paw" style={styles.featureIcon2} />
              </TouchableOpacity>
              <Text style = {styles.featureButtonText}>Location</Text>
            </View>
            <View style = {styles.featureItem}>
              <TouchableOpacity style = {styles.featureButtonPart} onPress = {() => router.push("/panting-count")}>
                <FontAwesome name="paw" style={styles.featureIcon1} />
              </TouchableOpacity>
              <Text style = {styles.featureButtonText}>Panting</Text>
            </View>
            <View style = {styles.featureItem}>
              <TouchableOpacity style = {styles.featureButtonPart} onPress = {() => router.push("/rib-compression")}>
                <FontAwesome name="paw" style={styles.featureIcon2} />
              </TouchableOpacity>
              <Text style = {styles.featureButtonText}>Rib Compression</Text>
            </View>
            <View style = {styles.featureItem}>
              <TouchableOpacity style = {styles.featureButtonPart} onPress = {() => router.push("/body-temp")}>
                <FontAwesome name="paw" style={styles.featureIcon1} />
              </TouchableOpacity>
              <Text style = {styles.featureButtonText}>Temperature</Text>
            </View>
            <View style = {styles.featureItem}>
              <TouchableOpacity style = {styles.featureButtonPart} onPress = {() => router.push("/ani-test")}>
                <FontAwesome name="paw" style={styles.featureIcon2} />
              </TouchableOpacity>
              <Text style = {styles.featureButtonText}>Pregnancy</Text>
            </View>
          </View>

          {/* fact carousel */}
          <View>
            <AnimatedCarousel/>
          </View>

          {/* feedback */}
          <View style = {styles.feedback}>
            <View style = {styles.buttonSection}>
              <TouchableOpacity style = {styles.feedbackButton} onPress = {() => router.push('/faq')}>
                <Text style = {styles.feedbackButtontext}>FAQs</Text>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.feedbackButton} onPress = {() => router.push('/feedback')}>
              <Text style = {styles.feedbackButtontext}>Feedback</Text>
              </TouchableOpacity>
            </View>
            <Text style = {styles.feedbackText}>We want to make your experience better!</Text>
          </View>
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    justifyContent: "space-around",
  },

  header: {
    marginTop: verticalScale(60),
    marginLeft: scale(20),
    marginRight: scale(150),
    justifyContent: "space-around",
    gap: verticalScale(10),
  },

  header1: {
    fontFamily: "DynaPuff-Bold",
    fontSize: scale(20),
    color: colours.darkBrown,
  },

  header2: {
    fontFamily: "Barlow-SemiBold",
    fontSize: scale(11),
    color: colours.black,
  },

  headerButton: {
    width: scale(95),
    backgroundColor: colours.darkBeige,
    borderRadius: scale(25),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: verticalScale(5),
  },

  headerButtonText: {
    fontFamily: "DynaPuff-Medium",
    fontSize: scale(11),
  },

  featureButtons: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  featureItem: {
    width: "20%",
    alignItems: "center",
    marginTop: verticalScale(20),
  },

  featureButtonPart: {
    height: scale(60),
    width: scale(60),
    borderRadius: scale(30),
    backgroundColor: colours.darkBrown,
    justifyContent: "center",
    alignItems: "center",
  },

  featureIcon1: {
    color: colours.darkBeige,
    fontSize: scale(30),
  },

  featureIcon2: {
    color: colours.white,
    fontSize: scale(30),
  },

  featureButtonText: {
    fontFamily: "Barlow-SemiBold",
    fontSize: scale(11.5),
    textAlign: "center",
  },

  feedbackText: {
    fontFamily: "Barlow-SemiBold",
    fontSize: scale(11),
    textAlign: "center",
  },

  feedbackButton: {
    width: scale(85),
    paddingVertical: verticalScale(5),
    backgroundColor: colours.darkBeige,
    borderRadius: scale(25),
    justifyContent: "center",
    alignItems: "center",
  },

  feedbackButtontext: {
    fontFamily: "DynaPuff-Medium",
    fontSize: scale(12),
    color: colours.darkBrown,
    textAlign: "center",
  },

  buttonSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: scale(20),
  },

  feedback: {
    gap: verticalScale(10),
  },
});


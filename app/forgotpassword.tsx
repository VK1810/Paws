import {
    Text,
    View,
    StyleSheet,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    StatusBar,
  } from "react-native";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { FontAwesome } from "@expo/vector-icons";
  import { 
    useEffect, 
    useState 
  } from "react";
  import { useRouter } from "expo-router";
  import Constants from "expo-constants";
  import colours from "../utils/colours";  // Import colors
  import { 
    scale, 
    verticalScale 
  } from "../utils/scale"; 
  
  const API_BASE_URL = Constants.expoConfig?.extra?.API_BASE_URL;
  
  export default function ForgotPassword() {
    const router = useRouter();
    const [email, setEmail] = useState("");
  
    useEffect(() => {
      StatusBar.setBarStyle("light-content");
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor("transparent");
    }, []);
  
    return (
      <View style={styles.container}>
        {/* Full-Screen Background */}
        <ImageBackground
          source={require("../assets/images/paw-pattern.jpg")}
          style={styles.background}
          resizeMode="cover"
        >
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.content}>
              {/* Heading */}
              <View style={styles.headingContainer}>
                <Text style={styles.heading1}>Lost your way?</Text>
                <Text style={styles.caption}>
                  Let's help you reset your password.
                </Text>
              </View>
  
              {/* Forgot Password Form */}
              <View style={styles.formContainer}>
                <Text style={styles.heading2}>Forgot Password</Text>
  
                {/* Email Input */}
                <View style={styles.inputContainer}>
                  <FontAwesome
                    name="envelope"
                    size={20}
                    color={colours.lightBrown}
                    style={styles.icon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor={colours.lightBrown}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
  
                {/* Send Mail Button */}
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>SEND RESET LINK</Text>
                </TouchableOpacity>
  
                {/* Back to Sign In */}
                <View style={styles.signInRedirect}>
                  <Text style={styles.redirectText}>Got your password back?</Text>
                  <TouchableOpacity onPress={() => router.replace("/")}>
                    <Text style={styles.redirectLink}>Sign in</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
      width: "100%",
      height: "100%",
    },
    safeArea: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: scale(20),
    },
    content: {
      width: "100%",
      alignItems: "center",
    },
    headingContainer: {
      alignItems: "center",
      marginBottom: verticalScale(30),
    },
    heading1: {
      color: colours.darkBeige,
      fontFamily: "DynaPuff",
      fontSize: scale(24),
      textAlign: "center",
    },
    caption: {
      color: colours.white,
      fontFamily: "Barlow-Medium",
      fontSize: scale(16),
      textAlign: "center",
      marginTop: verticalScale(5),
    },
    formContainer: {
      backgroundColor: colours.white,
      borderRadius: scale(25),
      padding: scale(25),
      width: "100%",
      maxWidth: scale(350),
      alignItems: "center",
      shadowColor: colours.black,
      shadowOffset: { width: 0, height: verticalScale(2) },
      shadowOpacity: 0.1,
      shadowRadius: scale(4),
      elevation: 3,
    },
    heading2: {
      color: colours.darkBrown,
      fontFamily: "DynaPuff",
      fontSize: scale(20),
      marginBottom: verticalScale(20),
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#F3E5D8",
      borderRadius: scale(25),
      borderColor: colours.lightBrown,
      borderWidth: 1,
      paddingHorizontal: scale(15),
      width: "100%",
      height: verticalScale(50),
      marginBottom: verticalScale(20),
    },
    icon: {
      marginRight: scale(10),
    },
    input: {
      flex: 1,
      fontSize: scale(16),
      fontFamily: "Barlow-Regular",
      color: colours.darkBrown,
    },
    button: {
      backgroundColor: colours.lightBrown,
      paddingVertical: verticalScale(12),
      width: "100%",
      borderRadius: scale(25),
      alignItems: "center",
      justifyContent: "center",
      marginTop: verticalScale(10),
    },
    buttonText: {
      color: colours.darkBeige,
      fontSize: scale(14),
      fontFamily: "Barlow-SemiBold",
    },
    signInRedirect: {
      flexDirection: "row",
      marginTop: verticalScale(15),
      alignItems: "center",
    },
    redirectText: {
      fontFamily: "Barlow-Regular",
      fontSize: scale(16),
    },
    redirectLink: {
      fontFamily: "Barlow-ExtraBold",
      fontSize: scale(16),
      color: colours.lightBrown,
      marginLeft: scale(5),
    },
  });
  
  
  
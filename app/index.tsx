import { 
  Text, 
  View, 
  StyleSheet, 
  ImageBackground, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  StatusBar, 
  Alert, 
  Modal 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { 
  useEffect, 
  useState 
} from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import colours from "../utils/colours";  
import { scale, verticalScale } from "../utils/scale"; 
import LoadingAnimation from "../components/loadingAnimation";

const API_BASE_URL = Constants.expoConfig?.extra?.API_BASE_URL;

console.log("API URL:", API_BASE_URL);

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  interface LoginResponse {
    access_token: string;
    token_type: string;
  }
  
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please enter both email and password");
      return;
    }
  
    setLoading(true);
    try {
      const response = await axios.post<LoginResponse>(`${API_BASE_URL}/login`, {
        email,
        password,
      });
  
      console.log("Response:", response.data); 
  
      if (!response.data.access_token) {
        throw new Error("Access token missing in response");
      }
  
      await AsyncStorage.setItem("access_token", response.data.access_token);
  
      Alert.alert("Success", "Login successful!");
      router.replace("/home");
    } catch (error: any) {
      console.log("Login Error:", error.response?.data || error.message);
      Alert.alert("Login Failed", error.response?.data?.detail || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    StatusBar.setBarStyle("light-content"); // Make status bar text white
    StatusBar.setTranslucent(true); // Remove status bar padding
    StatusBar.setBackgroundColor("transparent"); // Ensure it blends with the background
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Full-Screen Background */}
      <ImageBackground
        source={require("../assets/images/paw-pattern.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
          {/* Loading Modal */}
          {loading && (
            <Modal transparent={true} animationType="fade" visible={loading}>
              <View style={styles.loadingModalOverlay}>
                <View style={styles.loadingModalContent}>
                  <LoadingAnimation size = {100} />
                  <Text style={styles.loadingModalText}>Logging in...</Text>
                </View>
              </View>
            </Modal>
          )}

          <View style={styles.content}>
            {/* Sign In Heading */}
            <View style={styles.signInHeading}>
              <Text style={styles.heading1}>Welcome!</Text>
              <Text style={styles.caption}>We missed you & your furry friend!</Text>
            </View>

            {/* Sign In Form */}
            <View style={styles.signInContent}>
              <Text style={styles.heading2}>Sign In</Text>

              <View style={styles.inputContent}>
                {/* Email Input */}
                <View style={styles.inputContainer}>
                  <FontAwesome name="envelope" size={scale(20)} color={colours.lightBrown} style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={colours.lightBrown}
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>

                {/* Password Input */}
                <View style={styles.inputContainer}>
                  <FontAwesome name="lock" size={scale(20)} color={colours.lightBrown} style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={colours.lightBrown}
                    keyboardType="default"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                  />
                </View>
              </View>

              {/* Forgot Password */}
              <View style={{ width: 250, alignItems: "flex-end" }}>
                <TouchableOpacity onPress={() => router.replace("/forgotpassword")}>
                  <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>

              {/* Sign In Button */}
              <TouchableOpacity style={styles.signInButton} onPress={handleLogin} disabled={loading}>
                <Text style={styles.signInButtonText}>SIGN IN</Text>
              </TouchableOpacity>

              {/* Alternative Login */}
              <View style = {styles.altSignin}>
                <Text style={styles.altLogin}>Or sign in with</Text>
                <View style={styles.altLoginOptions}>
                  <TouchableOpacity onPress={() => console.log("Facebook Login")} style={styles.altLoginTouch}>
                    <Image source={require("../assets/images/facebook.png")} style={styles.altLoginIcons} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => console.log("Google Login")} style={styles.altLoginTouch}>
                    <Image source={require("../assets/images/google.png")} style={styles.altLoginIcons} />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Sign Up Link */}
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={{ fontFamily: "Barlow-Regular", fontSize: 16 }}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => {router.replace('/signup')}}>
                  <Text style={{ fontFamily: "Barlow-ExtraBold", fontSize: 16, color: colours.lightBrown, marginLeft: 5 }}>
                    Sign up
                  </Text>
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
    paddingTop: 0,
  },

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  content: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    padding: scale(20),
  },

  signInHeading: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: verticalScale(20),
  },

  signInContent: {
    backgroundColor: colours.white,
    borderRadius: scale(40),
    flex: 2,
    width: "100%",
    padding: scale(20),
    alignItems: "center",
    justifyContent: "space-around",
  },

  heading1: {
    color: colours.darkBeige,
    fontFamily: "DynaPuff",
    fontSize: scale(22),
    textAlign: "left",
  },

  caption: {
    color: colours.white,
    fontFamily: "Barlow-Medium",
    fontSize: scale(16),
    textAlign: "left",
  },

  heading2: {
    color: colours.darkBrown,
    fontFamily: "DynaPuff",
    fontSize: scale(22),
    textAlign: "left",
    width: scale(250),
  },

  altSignin: {
    opacity: 0,
    height: 0,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#CEC1AF",
    borderRadius: scale(25),
    borderColor: colours.lightBrown,
    borderWidth: 1,
    paddingHorizontal: scale(15),
    width: scale(250),
    height: verticalScale(50),
  },

  inputContent: {
    justifyContent: "center",
    alignItems: "center",
    gap: verticalScale(15),
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

  forgotPassword: {
    color: colours.lightBrown,
    fontSize: scale(14),
    fontFamily: "Barlow-Medium",
    textAlign: "right",
  },

  signInButton: {
    backgroundColor: colours.lightBrown,
    paddingVertical: verticalScale(12),
    width: scale(100),
    borderRadius: scale(25),
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(20),
  },

  signInButtonText: {
    color: colours.darkBeige,
    fontSize: scale(14),
    fontFamily: "Barlow-SemiBold",
  },

  altLogin: {
    fontFamily: "Barlow-Regular",
    fontSize: scale(16),
  },

  altLoginOptions: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: verticalScale(10),
    gap: scale(15),
  },

  altLoginTouch: {
    padding: scale(10),
    borderRadius: scale(20),
  },

  altLoginIcons: {
    width: scale(30),
    height: scale(30),
  },

  loadingModalText: {
  fontFamily: 'Barlow-SemiBold',
  color: colours.darkBeige,
  fontSize: scale(16),
},

loadingModalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.8)', 
  justifyContent: 'center',
  alignItems: 'center',
},

loadingModalContent: {
  
  padding: scale(20),
  borderRadius: scale(20),
  alignItems: 'center',
  justifyContent: 'center',
  gap: 10,
},

});


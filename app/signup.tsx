import { 
  Text, 
  View, 
  StyleSheet, 
  ImageBackground, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  StatusBar, 
  Alert 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { 
  useEffect, 
  useState 
} from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import Constants from "expo-constants";
import colours from "../utils/colours";  // Import colors
import { 
  scale, 
  verticalScale 
} from "../utils/scale"; 


const API_BASE_URL = Constants.expoConfig?.extra?.API_BASE_URL;

console.log("API URL:", API_BASE_URL);


export default function Index() {
    const router = useRouter();
    // State for form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);

    // Function to handle signup
    const handleSignup = async () => {
      if (!name || !email || !password || !confirmPassword) {
        Alert.alert("Error", "All fields are required.");
        return;
      }

      if (password !== confirmPassword) {
        Alert.alert("Error", "Passwords do not match.");
        return;
      }

      setLoading(true);
      console.log("Sending request to:", `${API_BASE_URL}/register`);
      try {
        const response = await axios.post(`${API_BASE_URL}/register`, {
          name,
          email,
          password,
        });

        console.log("Signup successful:", response.data);
        Alert.alert("Success", "Signup successful! Please log in.");

        // Redirect to login screen
        router.replace("/");
      } catch (error: any) {
        console.log("Signup error:", error.response?.data || error.message);
        Alert.alert("Signup Failed", error.response?.data?.message || "Something went wrong.");
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
          <View style={styles.content}>
            {/* Sign In Heading */}
            <View style={styles.signUpHeading}>
              <Text style={styles.heading1}>Hello!</Text>
              <Text style={styles.caption}>Join today & help our furry friends!</Text>
            </View>

            {/* Sign In Form */}
            <View style={styles.signUpContent}>
              <Text style={styles.heading2}>Sign Up</Text>

              <View style={styles.inputContent}>
                <View style={styles.inputContainer}>
                    <FontAwesome name="user" size={20} color={colours.lightBrown} style={styles.icon} />
                    <TextInput
                      style={styles.input}
                      placeholder="Name"
                      placeholderTextColor={colours.lightBrown}
                      value={name}
                      onChangeText={setName}
                    />
                </View>

                {/* Email Input */}
                <View style={styles.inputContainer}>
                  <FontAwesome name="envelope" size={20} color={colours.lightBrown} style={styles.icon} />
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
                  <FontAwesome name="lock" size={20} color={colours.lightBrown} style={styles.icon} />
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

                {/* Password Retype */}
                <View style={styles.inputContainer}>
                  <FontAwesome name="lock" size={20} color={colours.lightBrown} style={styles.icon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    placeholderTextColor={colours.lightBrown}
                    keyboardType="default"
                    secureTextEntry={true}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                  />
                </View>
              </View>

              {/* Sign In Button */}
              <TouchableOpacity style={styles.signUpButton} onPress={handleSignup} disabled={loading}>
                <Text style={styles.signUpButtonText}>SIGN UP</Text>
              </TouchableOpacity>

              {/* Alternative Login */}
              <View style = {styles.altSignup}>
                <Text style={styles.altLogin}>Or sign up with</Text>
                <View style={styles.altLoginOptions}>
                  <TouchableOpacity onPress={() => console.log("Facebook Signup")} style={styles.altLoginTouch}>
                    <Image source={require("../assets/images/facebook.png")} style={styles.altLoginIcons} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => console.log("Google Signup")} style={styles.altLoginTouch}>
                    <Image source={require("../assets/images/google.png")} style={styles.altLoginIcons} />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Sign Up Link */}
              <View style={{ flexDirection: "row", marginTop: 10 }}>
                <Text style={{ fontFamily: "Barlow-Regular", fontSize: 16 }}>have an account already? </Text>
                <TouchableOpacity onPress={() => router.replace("/")}>
                  <Text style={{ fontFamily: "Barlow-ExtraBold", fontSize: 16, color: colours.lightBrown, marginLeft: 5 }}>
                    Sign in
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

  signUpHeading: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: verticalScale(20),
  },

  signUpContent: {
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

  altSignup: {
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

  signUpButton: {
    backgroundColor: colours.lightBrown,
    paddingVertical: verticalScale(12),
    width: scale(100),
    borderRadius: scale(25),
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(20),
  },

  signUpButtonText: {
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
});


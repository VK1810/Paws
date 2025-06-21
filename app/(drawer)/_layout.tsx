import { useFonts } from "expo-font";
import { useEffect } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  useWindowDimensions,
  Image,
  BackHandler,
} from "react-native";
import { Drawer } from "expo-router/drawer";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import colours from "../../utils/colours";
import CustomDrawerContent from "../../components/customDrawer";
import { 
  scale, 
  verticalScale 
} from "../../utils/scale"; 
import { router } from 'expo-router';


export default function RootLayout() {
  const { width } = useWindowDimensions();

  const [loaded, error] = useFonts({
    "DynaPuff": require("../../assets/fonts/DynaPuff.ttf"),
    "DynaPuff-Bold": require("../../assets/fonts/DynaPuff-Bold.ttf"),
    "DynaPuff-SemiBold": require("../../assets/fonts/DynaPuff-SemiBold.ttf"),
    "DynaPuff-Medium": require("../../assets/fonts/DynaPuff-Medium.ttf"),
    "Barlow-Medium": require("../../assets/fonts/Barlow-Medium.ttf"),
    "Barlow-Regular": require("../../assets/fonts/Barlow-Regular.ttf"),
    "Barlow-SemiBold": require("../../assets/fonts/Barlow-SemiBold.ttf"),
    "Barlow-ExtraBold": require("../../assets/fonts/Barlow-ExtraBold.ttf"),
    "Barlow-Bold": require("../../assets/fonts/Barlow-Bold.ttf"),
  });

  useEffect(() => {
    const onBackPress = () => {
      router.back(); 
      return true;   
    };
  
    const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
  
    return () => subscription.remove();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <View style={styles.appContainer}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          headerTitle: "",
          headerStyle: { backgroundColor: "transparent" },
          headerTransparent: true,
          drawerActiveTintColor: colours.darkBeige,
          drawerInactiveTintColor: colours.darkBrown,
          drawerItemStyle: { backgroundColor: "transparent" },
          drawerLabelStyle: { fontFamily: "Barlow-Medium" },
          drawerStyle: { backgroundColor: colours.white },
          drawerActiveBackgroundColor: colours.darkBrown,
          headerRight: () => <CustomHeader screenWidth={width} />,
        }}
      />
      <Footer />
    </View>
  );
}

const Footer = () => {
  const router = useRouter(); 

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => router.replace("/user-profile")}>
        <Image
          source={require("../../assets/images/user.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace("/home")}>
        <Image
          source={require("../../assets/images/home-button.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => router.replace("/notifications")}>
        <Image
          source={require("../../assets/images/bell.png")}
          style={styles.footerIcon}
        />
      </TouchableOpacity>
    </View>
  );
};


const CustomHeader = ({ screenWidth }: { screenWidth: number }) => (
  <View style={[styles.headerContainer, { paddingHorizontal: screenWidth * 0.04 }]}>
    <View style={[styles.searchWrapper, { width: screenWidth * 0.5, height: verticalScale(40),}]}>
      <FontAwesome name="search" size={scale(18)} color={colours.darkBeige} style={styles.Icon} />
      <TextInput
        placeholder="Search..."
        placeholderTextColor={colours.white}
        style={[styles.searchbar, { fontSize: scale(14) }]}
      />
    </View>

    <TouchableOpacity
      style={[
        styles.vetConnectButton,
        {
          paddingVertical: verticalScale(6),
          paddingHorizontal: scale(12),
          borderRadius: scale(20),
        },
      ]}
      onPress={() => router.push('/vet-connect')}
    >
      <FontAwesome name="phone" size={scale(18)} color={colours.darkBeige} style={styles.Icon} />
      <Text style={[styles.vetConnectButtonText, { fontSize: scale(12) }]}>Vet</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colours.darkBrown,
    borderRadius: scale(20),
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: scale(12),
  },
  Icon: {
    marginRight: scale(8),
  },
  searchbar: {
    flex: 1,
    fontFamily: "Barlow-Regular",
    color: colours.white,
  },
  vetConnectButton: {
    backgroundColor: colours.darkBrown,
    marginLeft: scale(10),
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
  },
  vetConnectButtonText: {
    fontFamily: "DynaPuff",
    color: colours.white,
    textAlign: "center",
  },
  footer: {
    backgroundColor: colours.darkBrown,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: colours.white,
    height: verticalScale(45),
    flexDirection: "row",
    gap: scale(40),
  },
  footerIcon: {
    height: verticalScale(30),
    width: verticalScale(30),
  },
});

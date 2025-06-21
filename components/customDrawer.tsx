import { 
  View, 
  Text, 
  Pressable, 
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer"; 
import colours from "../utils/colours"; 
import { 
  scale, 
  verticalScale 
} from "../utils/scale";

export default function CustomDrawer(props: any) {

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: scale(20) }}>
        {/* Home Button */}
        <Pressable onPress={() => props.navigation.navigate("home")}>
          <Text style={{ fontSize: scale(18), marginBottom: verticalScale(20), color: colours.darkBrown }}>Home</Text>
        </Pressable>

        {/* Panting */}
        <Pressable onPress={() => props.navigation.navigate("breed-check")}>
          <Text style={{ fontSize: scale(18), marginBottom:  verticalScale(20), color: colours.darkBrown }}>Breed Check</Text>
        </Pressable>

        {/* Weight Check */}
        <Pressable onPress={() => props.navigation.navigate("weight-check")}>
          <Text style={{ fontSize: scale(18), marginBottom:  verticalScale(20), color: colours.darkBrown }}>Weight Check</Text>
        </Pressable>

        {/* heart Check */}
        <Pressable onPress={() => props.navigation.navigate("heart-check")}>
          <Text style={{ fontSize: scale(18), marginBottom:  verticalScale(20), color: colours.darkBrown }}>Heart Check</Text>
        </Pressable>

        {/* heart Check */}
        <Pressable onPress={() => props.navigation.navigate("location")}>
          <Text style={{ fontSize: scale(18), marginBottom:  verticalScale(20), color: colours.darkBrown }}>Location</Text>
        </Pressable>

        {/* Panting */}
        <Pressable onPress={() => props.navigation.navigate("panting-count")}>
          <Text style={{ fontSize: scale(18), marginBottom:  verticalScale(20), color: colours.darkBrown }}>Panting</Text>
        </Pressable>

        {/* Rib Compression */}
        <Pressable onPress={() => props.navigation.navigate("rib-compression")}>
          <Text style={{ fontSize: scale(18), marginBottom:  verticalScale(20), color: colours.darkBrown }}>Rib Compression</Text>
        </Pressable>

        {/* Body Temp */}
        <Pressable onPress={() => props.navigation.navigate("body-temp")}>
          <Text style={{ fontSize: scale(18), marginBottom:  verticalScale(20), color: colours.darkBrown }}>Temperature</Text>
        </Pressable>

      </View>
    </DrawerContentScrollView>
  );
}

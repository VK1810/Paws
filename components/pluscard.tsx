import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Image } from "expo-image";
import { Video, ResizeMode } from 'expo-av';
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import colours from "../utils/colours";
import Constants from "expo-constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_BASE_URL = Constants.expoConfig?.extra?.API_BASE_URL;

console.log("API URL:", API_BASE_URL);

// assets
const googledrive = require("../assets/images/google-drive.png");
const photoimage = require("../assets/images/image.png");
const videoIcon = require("../assets/images/video-camera.png");

type CardProps = {
  mode: "photo" | "video";
  feature: "breed" | "weight" | "panting" | "rib";
  onPredictionResult: (result: any) => void;
  resetTrigger?: boolean;
  onTriggerChange: () => void;
};

export default function Card({ mode, feature, onPredictionResult, onTriggerChange }: CardProps) {
  const [image, setImage] = useState<string | null>(null);
  const [videoUri, setVideoUri] = useState<string | null>(null);

  const handleGoogleDrive = () => {
    Linking.openURL("https://drive.google.com");
  };

  const uploadImageToBackend = async (uri: string) => {
    onTriggerChange();
    const formData = new FormData();
  
    const filename = uri.split("/").pop() || "image.jpg";
    const match = /\.(\w+)$/.exec(filename ?? "");
    const fileType = match ? `image/${match[1]}` : `image/jpeg`;
  
    formData.append("file", {
      uri,
      name: filename,
      type: fileType,
    } as any);
  
    if(mode == "photo"){
      try {
        const token = await AsyncStorage.getItem("access_token"); 
        if (!token) {
          alert("User not authenticated.");
          return;
        }
        
        if (feature == "breed"){
          const response = await fetch(`${API_BASE_URL}/predict/breed`, {
            method: "POST",
            body: formData,
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          });
      
          const result = await response.json();
          console.log("Prediction:", result);
          onPredictionResult(result); 
        }else if (feature == "weight"){
          const response = await fetch('https://20c2-2409-40f3-128-7ab2-4d3d-82a4-8bd9-bff0.ngrok-free.app/predict/weight', {
            method: "POST",
            body: formData,
            headers: {
              "Authorization": `Bearer ${token}`,
            },
          });
      
          const result = await response.json();
          console.log("Prediction:", result);
          onPredictionResult(result); 
        }
      } catch (error) {
        console.error("Upload error:", error);
      }
    }
  };
  
  

  const handleMediaLibrary = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.status !== "granted") {
      alert("Permission is required to access your media library.");
      return;
    }
  
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:
        mode === "photo"
          ? ImagePicker.MediaTypeOptions.Images
          : ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });
  
    if (!result.canceled && result.assets?.length > 0) {
      if (mode === "photo") {
        setImage(result.assets[0].uri);
        uploadImageToBackend(result.assets[0].uri);
      } else {
        setVideoUri(result.assets[0].uri);
      }
    }
  };
  
  const handleCamera = async () => {
    const permission = await ImagePicker.requestCameraPermissionsAsync();
    if (permission.status !== "granted") {
      alert("Camera permission is required!");
      return;
    }
  
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes:
        mode === "photo"
          ? ImagePicker.MediaTypeOptions.Images
          : ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      videoMaxDuration: 60,
      quality: 1,
    });
  
    if (!result.canceled && result.assets?.length > 0) {
      if (mode === "photo") {
        setImage(result.assets[0].uri);
        uploadImageToBackend(result.assets[0].uri); 
      } else {
        setVideoUri(result.assets[0].uri);
      }
    }
  };
  

  return (
    <View style={styles.card}>
      <Image source={googledrive} style={styles.gdrive} />
      <TouchableOpacity onPress={handleGoogleDrive}>
        <Text style={styles.gdtext}>Connect to Google Drive</Text>
      </TouchableOpacity>

      {mode === "photo" && (
        <>
          <Image source={photoimage} style={styles.library} />
          <TouchableOpacity onPress={handleMediaLibrary}>
            <Text style={styles.librarytext}>Choose Photo</Text>
          </TouchableOpacity>

          <Image source={videoIcon} style={styles.camera} />
          <TouchableOpacity onPress={handleCamera}>
            <Text style={styles.cameratext}>Capture Photo</Text>
          </TouchableOpacity>
        </>
      )}

      {mode === "video" && (
        <>
          <Image source={photoimage} style={styles.library} />
          <TouchableOpacity onPress={handleMediaLibrary}>
            <Text style={styles.librarytext}>Choose Video</Text>
          </TouchableOpacity>

          <Image source={videoIcon} style={styles.camera} />
          <TouchableOpacity onPress={handleCamera}>
            <Text style={styles.cameratext}>Record Video</Text>
          </TouchableOpacity>
        </>
      )}

      {image && <Image source={{ uri: image }} style={styles.image} />}
      {videoUri && (
        <Video
          source={{ uri: videoUri }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode={ResizeMode.COVER}
          shouldPlay
          useNativeControls
          style={styles.video}
        />
      )}

          </View>
        );
      }

const styles = StyleSheet.create({
  card: {
    backgroundColor: colours.darkBrown,
    borderRadius: 16,
    padding: 20,
    width: 330,
    height: 210,
    alignSelf: "center",
    gap: 20,
    marginTop: 300,
    position: "absolute",
    borderWidth: 3,
    borderColor: colours.darkBeige,
  },

  gdrive: {
    position: "absolute",
    width: 25,
    height: 25,
    marginTop: 30,
    marginLeft: 40,
  },

  gdtext: {
    position: "absolute",
    marginTop: 9,
    marginLeft: 75,
    color: colours.white,
    fontFamily: "Barlow-SemiBold",
    fontSize: 16,
  },

  library: {
    position: "absolute",
    width: 26,
    height: 25,
    marginTop: 90,
    marginLeft: 40,
  },

  librarytext: {
    position: "absolute",
    marginTop: 49,
    marginLeft: 75,
    color: colours.white,
    fontFamily: "Barlow-SemiBold",
    fontSize: 16,
  },

  camera: {
    position: "absolute",
    width: 25,
    height: 25,
    marginTop: 151,
    marginLeft: 42,
  },

  cameratext: {
    position: "absolute",
    marginTop: 89,
    marginLeft: 75,
    color: colours.white,
    fontFamily: "Barlow-SemiBold",
    fontSize: 16,
  },

  image: {
    width: 300,
    height: 250,
    marginTop: -105,
    marginLeft: -8,
  },

  video: {
    width: 300,
    height: 250,
    marginTop: -105,
    marginLeft: -8,
  },  
});

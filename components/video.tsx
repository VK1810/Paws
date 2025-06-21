import React, { useState } from 'react'; 
import { 
  Button, 
  View, 
  Text 
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function RecordVideo() {
  const [videoUri, setVideoUri] = useState<string | null>(null);

  const recordVideo = async () => {
    // Request permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Camera permission is required!');
      return;
    }

    // Launch native camera for video
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      videoMaxDuration: 60,
      quality: 1,
    });

    // Safe access
    if (!result.canceled && result.assets && result.assets.length > 0) {
      const video = result.assets[0];
      setVideoUri(video.uri);
      console.log('Video URI:', video.uri);
    } else {
      alert('No video was recorded.');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Record Video" onPress={recordVideo} />
      {videoUri && <Text style={{ marginTop: 10 }}>Saved to: {videoUri}</Text>}
    </View>
  );
}
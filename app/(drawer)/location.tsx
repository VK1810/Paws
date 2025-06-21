import React from 'react';
import * as Location from 'expo-location';
import type { LocationObjectCoords } from 'expo-location';
import MapView, { Marker} from 'react-native-maps';
import { StyleSheet, View, StatusBar, Text, TouchableOpacity, Image, Modal, Alert } from 'react-native';
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackgroundBlob from "../../components/backgroundBlob";
import colours from "../../utils/colours";
import { scale, verticalScale } from "../../utils/scale"; 
import { ResultCardLocation } from "../../components/resultcard";


export default function Loaction() {
    const [modalVisible, setModalVisible] = useState(false);
    const [location, setLocation] = useState<LocationObjectCoords | null>(null);

    useEffect(() => {
        StatusBar.setBarStyle("light-content"); // Make status bar text white
        StatusBar.setTranslucent(true); // Remove status bar padding
        StatusBar.setBackgroundColor("transparent"); // Ensure it blends with the background

        (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
    })();
      }, []);

  return (
    <View style={{ flex: 1 }}>
          <BackgroundBlob />
            <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
                <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Profile Selected');
                    setModalVisible(false);
                }}
                >
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Select dog</Text>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text style={styles.modalClose}>Close</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                {/* header */}
                <View style={styles.header}>
                    <Text style={styles.heading}>Heart Check</Text>
                    <View style={styles.subHeader}>
                        <Text style={styles.subHeading}>Track your dog's whereabouts!</Text>
                    </View>
                </View>

                {/* Dog Profile */}
                <View style={styles.profile}>
                    <View style={styles.profileImageWrapper}>
                        <Image
                            source = {require('../../assets/images/beigepaw.png')}
                            style={styles.profileImage}
                        />

                    </View>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Image
                        source = {require('../../assets/images/plus.png')}
                        style={styles.changeProfile}
                    />
                    </TouchableOpacity>
                </View>

                {/* Map */}
                <View style={styles.mapWrapper}>
                {location ? (
                    <MapView
                    style={styles.map}
                    showsUserLocation={true}
                    initialRegion={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                    >
                    <Marker
                        coordinate={{
                        latitude: location.latitude,
                        longitude: location.longitude,
                        }}
                        title="You are here"
                    />
                    </MapView>
                ) : (
                    <Text style={{ textAlign: 'center', paddingTop: 20 }}>
                    Fetching location...
                    </Text>
                )}
                </View>


                <ResultCardLocation></ResultCardLocation>
            </SafeAreaView>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop: 0, // Removes padding caused by SafeAreaView
    gap: verticalScale(20),
  },

    mapWrapper: {
    borderColor: colours.darkBrown,
    borderWidth: 3,
    borderRadius: scale(15),
    overflow: 'hidden',
    width: scale(275),
    height: scale(300),
    alignSelf: 'center',
    },

    map: {
    width: '100%',
    height: '100%',
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

  profileImage: {
    width: scale(120),
    height: scale(120),
    borderRadius: scale(120),
    borderColor: colours.darkBeige,
  },

  profileImageWrapper: {
    width: scale(105),
    height: scale(105),
    borderRadius: scale(105)/2,
    backgroundColor: colours.darkBeige,
    alignItems: 'center',
    justifyContent: 'center',
  },

  changeProfile: {
    width: scale(70),
    height: scale(70),
  },

  profile: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginLeft: scale(20),
  },

  modalOverlay: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
},

    modalContent: {
    backgroundColor: 'white',
    padding: scale(20),
    borderRadius: scale(10),
    alignItems: 'center',
    width: '80%',
    },

    modalText: {
    fontSize: scale(16),
    marginBottom: verticalScale(10),
    },

    modalClose: {
    color: 'blue',
    marginTop: verticalScale(10),
    },

});

import {
  StyleSheet, 
  Text, 
  View, 
  FlatList 
} from 'react-native';
import React , { 
  useState, 
  useMemo 
} from 'react';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import colours from '@/utils/colours';
import { 
  scale, 
  verticalScale 
} from '@/utils/scale';
import { 
  specialties, 
  Specialty 
} from '@/assets/data/specialties';
import { 
  doctors, 
  Doctor 
} from '@/assets/data/doctors';
import { Stack } from "expo-router";

export default function VetConnectScreen() {
  const [specialty, setSpecialty] = useState<Specialty | ''>('');
  const [distance, setDistance] = useState<number>(10);

  const filteredDoctors = useMemo(
    () =>
      doctors.filter((doc: Doctor) => {
        const matchesSpecialty = specialty ? doc.specialty === specialty : true;
        const withinDistance = doc.distanceKm <= distance;
        return matchesSpecialty && withinDistance;
      }),
    [specialty, distance]
  );

  return (
    <>
    <Stack.Screen options={{ presentation: "modal", title: "Feedback", headerShown: false }} />
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Vet Connect</Text>
      </View>

      <View style={styles.inputWrapper}>
        <View style={styles.dropDownWrapper}>
          <Picker
            selectedValue={specialty}
            onValueChange={(val) => setSpecialty(val as Specialty)}
            mode="dropdown"
            dropdownIconColor={colours.darkBrown}
            style={styles.picker}
          >
            <Picker.Item label="Specialty" value="" enabled={false} />
            {specialties.map((spec) => (
              <Picker.Item key={spec} label={spec} value={spec} />
            ))}
          </Picker>
        </View>

        <View style={styles.sliderWrapper}>
          <Text style={styles.sliderLabel}>Within {distance} km</Text>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={20}
            step={1}
            value={distance}
            minimumTrackTintColor={colours.darkBeige}
            maximumTrackTintColor={colours.lightBrown}
            thumbTintColor={colours.darkBrown}
            onValueChange={setDistance}
          />
        </View>
      </View>

      <View style={styles.listWrapper}>
        <FlatList
          data={filteredDoctors}
          keyExtractor={(item) => item.id}
          nestedScrollEnabled
          showsVerticalScrollIndicator
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No doctors found</Text>
          }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.docName}>{item.name}</Text>
              <Text style={styles.docInfo}>{item.phone}</Text>
              <Text style={styles.docInfo}>{item.specialty}</Text>
              <Text style={styles.docInfo}>{item.distanceKm} km away</Text>
            </View>
          )}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.darkBrown,
    padding: scale(20),
  },

  header: {
    marginTop: verticalScale(50),
    marginBottom: verticalScale(20),
  },

  title: {
    fontSize: scale(24),
    fontFamily: 'DynaPuff-SemiBold',
    color: colours.darkBeige,
  },

  inputWrapper: {
    marginBottom: verticalScale(20),
  },

  dropDownWrapper: {
    height: verticalScale(50),
    borderRadius: scale(8),
    backgroundColor: colours.white,
    justifyContent: 'center',
    marginBottom: verticalScale(15),
  },

  picker: {
    width: '100%',
    color: colours.darkBrown,
  },

  sliderWrapper: {
    backgroundColor: colours.white,
    borderRadius: scale(8),
    padding: scale(15),
    marginBottom: verticalScale(20),
  },

  sliderLabel: {
    fontSize: scale(16),
    color: colours.darkBrown,
    marginBottom: verticalScale(10),
  },

  slider: {
    width: '100%',
    height: verticalScale(40),
  },

  listWrapper: {
    height: verticalScale(400), 
    borderWidth: 2,
    borderColor: colours.darkBeige,
    borderRadius: scale(8),
    overflow: 'hidden',
  },

  listContainer: {
    padding: scale(10),
  },

  card: {
    backgroundColor: colours.white,
    borderRadius: scale(8),
    padding: scale(15),
    marginBottom: verticalScale(10),
  },

  docName: {
    fontSize: scale(18),
    fontWeight: 'bold',
    color: colours.darkBrown,
  },

  docInfo: {
    fontSize: scale(14),
    color: colours.darkBrown,
    marginTop: verticalScale(4),
  },

  emptyText: {
    textAlign: 'center',
    marginTop: verticalScale(20),
    color: colours.lightBeige,
  },
});

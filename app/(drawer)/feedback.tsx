import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    Alert 
} from 'react-native';
import colours from '@/utils/colours';
import { Stack } from "expo-router";
import { 
    scale, 
    verticalScale 
} from '@/utils/scale';

export default function FeedbackForm() {
  const [form, setForm] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
  });

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    console.log('Feedback submitted:', form);
    Alert.alert('Thank you!', 'Your feedback has been submitted.');
    setForm({ q1: '', q2: '', q3: '', q4: '', q5: '' });
  };

  return (
    <>
    <Stack.Screen options={{ presentation: "modal", title: "Feedback", headerShown: false }} />
    <View style={styles.container}>
      <Text style={styles.title}>Feedback Form</Text>

      <Text style={styles.label}>1. How was your experience?</Text>
      <TextInput
        style={styles.input}
        value={form.q1}
        onChangeText={(text) => handleChange('q1', text)}
        placeholder="Type your answer..."
        placeholderTextColor={colours.lightBrown}
      />

      <Text style={styles.label}>2. Was the app easy to use?</Text>
      <TextInput
        style={styles.input}
        value={form.q2}
        onChangeText={(text) => handleChange('q2', text)}
        placeholder="Type your answer..."
        placeholderTextColor={colours.lightBrown}
      />

      <Text style={styles.label}>3. What feature did you like most?</Text>
      <TextInput
        style={styles.input}
        value={form.q3}
        onChangeText={(text) => handleChange('q3', text)}
        placeholder="Type your answer..."
        placeholderTextColor={colours.lightBrown}
      />

      <Text style={styles.label}>4. What would you improve?</Text>
      <TextInput
        style={styles.input}
        value={form.q4}
        onChangeText={(text) => handleChange('q4', text)}
        placeholder="Type your answer..."
        placeholderTextColor={colours.lightBrown}
      />

      <Text style={styles.label}>5. Any additional comments?</Text>
      <TextInput 
        style={[styles.input, { height: 80 }]}
        value={form.q5}
        onChangeText={(text) => handleChange('q5', text)}
        placeholder="Type your answer..."
        placeholderTextColor={colours.lightBrown}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -7,
    padding: 16,
    borderRadius: 12,
    backgroundColor: colours.white,
    justifyContent: 'flex-start',
    paddingTop: verticalScale(50)
  },
  title: {
    fontSize: 20,
    fontFamily: 'DynaPuff-SemiBold',
    color: colours.darkBrown,
    marginTop: 15,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: 'Barlow-SemiBold',
    color: colours.darkBrown,
    marginBottom: 6,
    marginTop: 20,
  },
  input: {
    margin: 5,
    borderWidth: 1,
    borderColor: colours.lightBrown,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    fontFamily: 'Barlow-Medium',
    color: colours.darkBrown,
    backgroundColor: colours.lightBeige,
  },
  button: {
    marginTop: 30,
    marginBottom: 25,
    backgroundColor: colours.darkBrown,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colours.white,
    fontFamily: 'Barlow-SemiBold',
    fontSize: 16,
  },
});
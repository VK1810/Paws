import React, { 
  useState, 
  useEffect 
} from 'react';
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  StyleSheet,
  Platform,
  Text,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import colours from '@/utils/colours';

export default function TempInput() {
  const [enterTemp, setEnterTemp] = useState('');
  const [tempUnit, setTempUnit] = useState<'C' | 'F'>('C');
  const [classification, setClassification] = useState('');

  useEffect(() => {
    classifyTemperature();
  }, [enterTemp, tempUnit]);

  const classifyTemperature = () => {
    const temp = parseFloat(enterTemp);
    if (isNaN(temp)) {
      setClassification('');
      return;
    }

    let status = '';
    let converted = '';

    if (tempUnit === 'C') {
      const tempF = (temp * 9) / 5 + 32;
      converted = tempF.toFixed(1) + '°F';

      if (temp < 37.5) status = '❄ Hypothermia (Low)';
      else if (temp <= 39.2) status = '✅ Normal';
      else status = '🔥 Fever (High)';
    } else {
      const tempC = ((temp - 32) * 5) / 9;
      converted = tempC.toFixed(1) + '°C';

      if (temp < 99.5) status = '❄ Hypothermia (Low)';
      else if (temp <= 102.5) status = '✅ Normal';
      else status = '🔥 Fever (High)';
    }

    setClassification(status + ' - ' + converted);
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.screen}
    >
      <View style={styles.row}>
      <TextInput
          style={styles.input}
          placeholder="Enter Temperature"
          placeholderTextColor="#846F53"
          keyboardType="numeric"
          value={enterTemp}
          onChangeText={setEnterTemp}
      />

      <View style={styles.pickerWrapper}>
        <Picker
            selectedValue={tempUnit}
            onValueChange={(value) => setTempUnit(value)}
            mode="dropdown"
            dropdownIconColor={colours.darkBrown}
            style={styles.picker}
        >
          <Picker.Item label="°C" value="C" />
          <Picker.Item label="°F" value="F" />
          </Picker>
      </View>
      </View>
      <View style={styles.resultBox}>
        <Text style={styles.resultLabel}>RESULT:</Text>
        {classification !== '' && (
          <Text style={styles.classificationText}>{classification}</Text>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 28,
  },

  row: {
    height: 80,
    position: "fixed",
    flexDirection: 'row',
    backgroundColor: colours.darkBeige,
    borderRadius: 10,
    overflow: 'hidden',
    borderColor: colours.lightBeige,
    borderWidth: 3,
    marginTop: -307
  },

  input: {
    color: colours.darkBrown,
    flex: 2,
    height: 55,
    marginTop: 10,
    paddingHorizontal: 12,
    fontSize: 18,
  },

  pickerWrapper: {
    marginTop: 5,
    flex: 1,
    justifyContent: 'center',
    height: Platform.OS === 'ios' ? 250 : 55,
  },

  picker: {
    fontSize: 18,
    color: colours.darkBrown,
    width: '100%',
    height: '100%',
  },

  resultBox: {
    alignItems: 'center',
    padding: 12,
    backgroundColor: colours.darkBrown,
    borderRadius: 10,
    borderColor: colours.darkBeige,
    borderWidth: 3,
    marginTop: 80,
  },

  resultLabel: {
    fontSize: 18,
    color: colours.darkBeige,
    marginBottom: 5,
    fontFamily: 'DynaPuff-Bold',
  },

  classificationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colours.darkBeige,
  },
});
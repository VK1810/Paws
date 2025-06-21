import { 
    StyleSheet, 
    Text, 
    View, 
    TouchableOpacity 
} from 'react-native';
import { Image } from 'expo-image';
import { useState } from 'react';
import colours from '@/utils/colours';
import { 
    scale, 
    verticalScale 
} from '@/utils/scale';
import faqData from '@/assets/data/faqs'; 
import { Stack } from "expo-router";

const arrow = require('../../assets/images/down-arrow.png');
const brown_paw = require('../../assets/images/brownpaw.png');
const beige_circle = require('../../assets/images/circle_2.png');

export default function FaqsScreen() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <>
        <Stack.Screen options={{ presentation: "modal", title: "FAQs", headerShown: false }} />
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>FAQs</Text>
        </View>
        <Image source={brown_paw} style={styles.paw} />
        <Image source={beige_circle} style={styles.circle1} />
        <Image source={beige_circle} style={styles.circle2} />

        <View style={styles.infoContainer}>
            {faqData.map(({ id, questiontag,question, answer }) => (
            <View key={id} style={styles.questionBlock}>
                <TouchableOpacity
                onPress={() => toggleExpand(id)}
                style={styles.infoRow}
                activeOpacity={0.7}
                >
                <Text style={styles.infoLabel}>{questiontag}</Text>
                <Image source={arrow} style={styles.arrow_style1} />
                </TouchableOpacity>
                {expandedId === id && (
                <View style={styles.answerBox}>
                    <Text style={styles.quesText}>{question}</Text>
                    <Text style={styles.answerText}>{answer}</Text>
                </View>
                )}
            </View>
            ))}
        </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colours.darkBrown,
      padding: 20,
      paddingTop: verticalScale(50),
    },
  
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 30,
      paddingTop: 20,
    },
  
    title: {
      fontSize: scale(24),
      fontFamily: 'DynaPuff-SemiBold',
      color: colours.darkBeige,
      marginBottom: 20,
    },

    paw: {
        position: 'absolute',
        width: 70,
        height: 79,
        marginTop: 25,
        marginLeft: 300,
    },

    circle1: {
        position: 'absolute',
        width: 25,
        height: 25,
        marginTop: 20,
        marginLeft: 282,
    },

    circle2: {
        position: 'absolute',
        width: 12,
        height: 12,
        marginTop: 55,
        marginLeft: 280,
    },
  
    infoContainer: {
      marginBottom: 30,
    },
  
    questionBlock: {
      marginBottom: 15,
    },
  
    infoRow: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
      paddingBottom: 10,
      paddingRight: 30,
    },
  
    infoLabel: {
      fontSize: 16,
      fontFamily: 'Barlow-Bold',
      color: colours.darkBeige,
      marginBottom: 10,
    },
  
    arrow_style1: {
      marginLeft: 'auto',
      width: 15,
      height: 15,
    },
  
    answerBox: {
      backgroundColor: colours.lightBeige,
      padding: 10,
      borderRadius: 6,
      marginTop: 8,
      borderWidth: 1,
      borderColor: colours.darkBeige,
    },

    quesText: {
        fontSize: 16,
        fontFamily: 'Barlow-Bold',
        color: colours.darkBrown,
        marginBottom: 10,
      },
  
    answerText: {
      fontSize: 15,
      fontFamily: 'Barlow-Medium',
      color: colours.darkBrown,
    },
  });
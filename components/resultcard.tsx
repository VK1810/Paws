import { 
    Text, 
    View, 
    StyleSheet, 
    TouchableOpacity 
} from "react-native";
import { Image } from 'expo-image';
import colours from "../utils/colours";  
import { 
    scale, 
    verticalScale 
} from "../utils/scale";  

type ResultCardBreedProps = {
    breed: string;
    confidence: string;
    confidenceLevel: string;
    user: string;
  };

  type ResultCardWeightProps = {
    user: string;
    weight: string;
};

type ResultCardPantingProps = {
};

type ResultCardRibProps = {
};

type ResultCardHeartProps = {
};

type ResultCardLocation = {
};



export function ResultCardBreed({
    breed,
    confidence,
    confidenceLevel,
  }: ResultCardBreedProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.result_text}>RESULT</Text>
            <View style={styles.text_line}>
                <Text style={styles.text}>Breed: </Text>
                <Text style={styles.text_result}>{breed}</Text>
            </View>
            <View style={styles.text_line}>
                <Text style={styles.text}>Confidence: </Text>
                <Text style={styles.text_result}>{confidence}</Text>
            </View>
            <View style={styles.text_line}>
                <Text style={styles.text}>Level: </Text>
                <Text style={styles.text_result}>{confidenceLevel}</Text>
            </View>
        </View>
    );
};

export function ResultCardWeight({
    user,
    weight
  }: ResultCardWeightProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.result_text}>RESULT</Text>
            <View style={styles.text_line}>
                <Text style={styles.text}>Weight: </Text>
                <Text style={styles.text_result}>{weight}</Text>
            </View>
        </View>
    );
};

export function ResultCardPanting({
  }: ResultCardPantingProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.result_text}>RESULT</Text>
        </View>
    );
};

export function ResultCardRib({
}: ResultCardRibProps) {
  return (
      <View style={styles.card}>
          <Text style={styles.result_text}>RESULT</Text>
      </View>
  );
};


export function ResultCardHeart({
}: ResultCardHeartProps) {
    return (
        <View style={styles.heartResult}>

            {/* Result  */}
            <View style={styles.cardHeart}>
                <View style={styles.beatResult}>
                    <Text style={styles.beatResultText}>90{'\n'}BPM</Text>
                </View>
                <View>
                    <Text style={styles.timeResultText}>5 mins ago</Text>
                </View>
                <View>
                    <Text style={styles.commentResultText}>A little elevated — maybe excited or active?</Text>
                </View>
            </View>

            {/*Buttons*/}
            <View style={styles.heartButtons}>
                <TouchableOpacity>
                    <Image source={require("../assets/images/refresh-page-option.png")} style={styles.heartButtonIcon}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require("../assets/images/history.png")} style={styles.heartButtonIcon}></Image>
                </TouchableOpacity>
            </View>

            {/*Min-Max*/}
            <View style={styles.minMaxSection}>
                <View style={styles.minMaxWrapper}>
                    <Text style={styles.minMaxTextHeader}>MAX:</Text>
                    <Text style={styles.minMaxTextContent}>100 BPM</Text>
                </View>
                <View style={styles.minMaxWrapper}>
                    <Text style={styles.minMaxTextHeader}>MIN:</Text>
                    <Text style={styles.minMaxTextContent}>60 BPM</Text>
                </View>
            </View>
        </View>
    );
};

export function ResultCardLocation() {
    return (
        <View style={styles.locationCard}>
            <Text style={styles.result_text}>Distance :</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
      backgroundColor: colours.darkBrown, // #4e2100
      borderRadius: 12,
      padding: 20,
      width: 300,
      alignSelf: 'center',
      gap: 10,
      marginTop: 550,
      position: "absolute",
      borderWidth: 3,
      borderColor: colours.darkBeige,
    },

    result_text: {
        color: colours.white,
        fontFamily:"DynaPuff-SemiBold",
        fontSize: 16,
    },

    text:{
        fontFamily: "Barlow-Regular",
        fontSize: 14,
        color: colours.darkBeige,
    },

    text_result:{
        fontFamily: "Barlow-SemiBold",
        fontSize: 14,
        color: colours.lightBeige,
    },

    text_line: {
        flexDirection: 'row',
    },

    cardHeart: {
        height: scale(260),
        width: scale(260),
        backgroundColor: colours.darkBrown,
        borderRadius: scale(100),
        borderColor: colours.darkBeige,
        borderWidth: scale(2),
        alignItems: "center",
        justifyContent: "center",
        gap: scale(10),
        padding: scale(20),
    },

    beatResult: {
        alignItems: "center",
    },

    beatResultText: {
        fontFamily: "DynaPuff-Bold",
        fontSize: scale(25),
        color: colours.white,
        textAlign: "center",
        lineHeight: scale(25),
    },

    timeResultText: {
        fontFamily: "Barlow-SemiBold",
        color: colours.lightBeige,
        fontSize: scale(20),
        textAlign: "center",
    },

    commentResultText: {
        fontFamily: "Barlow-SemiBold",
        color: colours.darkBeige,
        fontSize: scale(16),
        textAlign: "center",
    },

    heartButtons: {
        flexDirection: "row",
        gap: scale(20),
        alignItems: "center",
        justifyContent: "center",
      },
    
      heartButtonIcon: {
        height: scale(35),
        width: scale(35),
      },

      minMaxWrapper:{
        backgroundColor: colours.darkBrown,
        borderColor: colours.darkBeige,
        borderWidth: scale(2),
        borderRadius: scale(5),
        width: scale(175),
        height: verticalScale(50),
        justifyContent: "space-between",
        alignItems: "center", 
        paddingHorizontal: scale(10),
        flexDirection: "row",
      },

      minMaxTextHeader: {
        fontFamily: "DynaPuff-Bold",
        fontSize: scale(16),
        color: colours.white,
        textAlign: "left",
      },

      minMaxTextContent: {
        fontFamily: "DynaPuff-Bold",
        fontSize: scale(16),
        color: colours.white,
        textAlign: "right",
      },

      minMaxSection: {
        gap: verticalScale(10),
        alignItems: "center",
      },

      heartResult: {
        gap: verticalScale(20),
      },

      locationCard: {
        backgroundColor: colours.darkBrown, // #4e2100
        borderRadius: 12,
        padding: 20,
        width: 300,
        alignSelf: 'center',
        gap: 10,
        borderWidth: 3,
        borderColor: colours.darkBeige,
        flexDirection: 'row',
      }
});
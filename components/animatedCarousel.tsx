import React, { 
  useState, 
  useEffect, 
  useRef 
} from "react";
import {
  Animated,
  FlatList,
  View,
  Dimensions,
  StyleSheet,
} from "react-native";
import CarouselCard from "./carouselCard";
import colours from "../utils/colours";
import { data as fullData } from "../assets/data/facts";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.8;
const CARD_SPACING = 10;
const SNAP_INTERVAL = CARD_WIDTH + CARD_SPACING;
const SIDE_SPACING = (width - CARD_WIDTH) / 2;
const AUTO_SCROLL_INTERVAL = 3000;

export default function AnimatedCarousel() {
  const [facts, setFacts] = useState<{ key: string; title: string }[]>([]);
  const scrollX = useRef(new Animated.Value(0)).current;
  const listRef = useRef<FlatList>(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const shuffled = [...fullData].sort(() => Math.random() - 0.5).slice(0, 5);
    setFacts(shuffled);
  }, []);

  useEffect(() => {
    if (facts.length === 0) return;

    const interval = setInterval(() => {
      currentIndexRef.current =
        (currentIndexRef.current + 1) % facts.length;

      listRef.current?.scrollToOffset({
        offset: currentIndexRef.current * SNAP_INTERVAL,
        animated: true,
      });
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(interval);
  }, [facts]);

  return (
    <View>
      <Animated.FlatList
        ref={listRef}
        data={facts}
        keyExtractor={(item) => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SNAP_INTERVAL}
        decelerationRate="fast"
        bounces={false}
        contentContainerStyle={{
          paddingHorizontal: SIDE_SPACING,
        }}
        getItemLayout={(_, index) => ({
          length: SNAP_INTERVAL,
          offset: SNAP_INTERVAL * index,
          index,
        })}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        renderItem={({ item }) => <CarouselCard item={item} />}
        ItemSeparatorComponent={() => <View style={{ width: CARD_SPACING }} />}
      />

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {facts.map((_, index) => {
          const inputRange = [
            (index - 1) * SNAP_INTERVAL,
            index * SNAP_INTERVAL,
            (index + 1) * SNAP_INTERVAL,
          ];

          const dotOpacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });

          const dotScale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.3, 0.8],
            extrapolate: "clamp",
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  opacity: dotOpacity,
                  transform: [{ scale: dotScale }],
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: colours.darkBrown,
    marginHorizontal: 6,
  },
});

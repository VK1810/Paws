import React, { useEffect } from 'react';
import { 
  View, 
  StyleSheet 
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';
import { FontAwesome } from '@expo/vector-icons';
import colours from '../utils/colours';

type LoadingAnimationProps = {
  size: number;
};

const AnimatedFontAwesome = Animated.createAnimatedComponent(FontAwesome);

export default function LoadingAnimation({ size }: LoadingAnimationProps) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 500 }),
      -1,
      true 
    );
  }, []);

  const containerStyle = useAnimatedStyle(() => {
    const translateY = progress.value * -30;
    const scaleY = 1 + progress.value * 0.1; 
    const scaleX = 1 - progress.value * 0.05; 

    return {
      transform: [
        { translateY },
        { scaleY },
        { scaleX },
      ],
    };
  });

  const iconStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      progress.value,
      [0, 1],
      [colours.lightBrown, colours.darkBeige] 
    );
    return { color };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.bouncingWrapper,
          {
            borderRadius: size,
            padding: size * 0.3,
          },
          containerStyle,
        ]}
      >
        <AnimatedFontAwesome name="paw" size={size} style={iconStyle} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bouncingWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

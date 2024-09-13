import {Pressable} from "react-native";
import styled from "styled-components/native";
import Animated, {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import {type IconProps, Icon} from "~/components/Icon";

export type Props = {
  icon: IconProps["name"];
  size?: number;
  color?: string;
  elevated?: boolean;
  onPress?: () => void;
};

export function IconButton(props: Props) {
  const {icon, size = 32, color, elevated, onPress} = props;

  // feedback animation
  const scale = useSharedValue(1);
  const feedbackStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  function handlePressIn() {
    scale.value = withTiming(0.95, {duration: 150});
  }

  function handlePressOut() {
    scale.value = withTiming(1, {duration: 150});
  }

  const elevationStyle = {
    elevation: 10, // For Android
    shadowColor: "#BFBFC0",
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 16,
  };

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} onPress={onPress}>
      <Base size={size} elevated={!!elevated} style={[elevated && elevationStyle, feedbackStyle]}>
        <Icon name={icon} size={size} color={color} />
      </Base>
    </Pressable>
  );
}

type BaseProps = {
  size: number;
  elevated: boolean;
};

const Base = styled(Animated.View)<BaseProps>`
  width: ${({size}) => size * 1.7}px;
  height: ${({size}) => size * 1.7}px;
  border-radius: ${({size}) => size}px;
  justify-content: center;
  align-items: center;
  background-color: ${({elevated}) => (elevated ? "#ffffff" : "transparent")};
`;

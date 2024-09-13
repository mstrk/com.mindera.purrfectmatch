import {useEffect, useRef, useState} from "react";
import {Dimensions} from "react-native";
import styled from "styled-components/native";
import Animated, {useSharedValue, useAnimatedStyle, withTiming, runOnJS} from "react-native-reanimated";
import {GestureDetector, Gesture} from "react-native-gesture-handler";
import {IconButton} from "~/components/IconButton";
import {Card} from "~/components/Card";

async function getMatches() {
  return fetch("https://api.thecatapi.com/v1/images/search?limit=10").then((response) => response.json());
}

export function HomeScreen() {
  const {width: SCREEN_WIDTH} = Dimensions.get("screen");
  const stack = useRef<any[]>([]);
  const pos = useRef(0);
  const [currentMatch, setCurrentMatch] = useState<any | undefined>(undefined);
  const translateX = useSharedValue(0);
  const rotateZ = useSharedValue(0);

  useEffect(() => {
    getMatches().then((data) => {
      stack.current = data;
      setCurrentMatch(stack.current[0]);
    });
  }, []);

  function updateCurrentMatch() {
    // if we reached the end of the stack (out of bounds), fetch more matches and set the current position to zero
    if (pos.current === stack.current.length - 1) {
      getMatches().then((data) => {
        stack.current = data;
        pos.current = 0;
        setCurrentMatch(stack.current[0]);
        translateX.value = 0;
        rotateZ.value = 0;
      });
    } else {
      pos.current++;
      setCurrentMatch(stack.current[pos.current]);

      // Give the image time to render before resetting the card position
      setTimeout(() => {
        translateX.value = 0;
        rotateZ.value = 0;
      }, 300);
    }
  }

  function handleUnmatch() {
    "worklet";
    rotateZ.value = withTiming(((-SCREEN_WIDTH * 1.5) / 200) * 10, {duration: 300});

    translateX.value = withTiming(-SCREEN_WIDTH * 1.5, {duration: 300}, () => {
      runOnJS(updateCurrentMatch)();
    });
  }

  function handleMatch() {
    "worklet";
    rotateZ.value = withTiming(((SCREEN_WIDTH * 1.5) / 200) * 10, {duration: 300});

    translateX.value = withTiming(SCREEN_WIDTH * 1.5, {duration: 300}, () => {
      runOnJS(updateCurrentMatch)();
    });
  }

  // Gesture handling for swipe
  const swipeGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      rotateZ.value = (event.translationX / 200) * 10; // Rotate slightly during swipe
    })
    .onEnd((event) => {
      if (event.translationX > 120) {
        handleMatch();
      } else if (event.translationX < -120) {
        handleUnmatch();
      } else {
        translateX.value = 0;
        rotateZ.value = 0;
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}, {rotateZ: `${rotateZ.value}deg`}],
  }));

  return (
    <Root>
      {currentMatch && (
        <GestureDetector gesture={swipeGesture}>
          <AnimatedCard style={animatedStyle}>
            <Card title="Abyssinian" info="4" caption="Egypt" image={currentMatch.url} />
          </AnimatedCard>
        </GestureDetector>
      )}
      <Actions>
        <IconButton icon="unmatch" color="#E16359" elevated onPress={handleUnmatch} />
        <IconButton icon="match" color="#6BD88E" elevated onPress={handleMatch} />
      </Actions>
    </Root>
  );
}

const Root = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 16px;
`;

const Actions = styled.View`
  flex-direction: row;
  margin-top: 58px;
  gap: 48px;
`;

const AnimatedCard = styled(Animated.View)`
  width: 100%;
  height: 446px;
`;

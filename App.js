import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";
import "react-native-gesture-handler";
import * as Font from "expo-font";
import LottieView from "lottie-react-native";
import Main from "./src/components/Main/Main";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

export default function App() {
  const [isAppReady, setAppReady] = useState(false);
  const [isAnimationComplete, setAnimationComplete] = useState(false);

  const animationProgress = useRef(new Animated.Value(1));

  useEffect(() => {
    Animated.timing(animationProgress.current, {
      toValue: 0,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => setAnimationComplete(true));
  }, []);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Poppins-Light": require("./src/fonts/Poppins/Poppins-Light.ttf"),
          "Poppins-Medium": require("./src/fonts/Poppins/Poppins-Medium.ttf"),
          "Poppins-Regular": require("./src/fonts/Poppins/Poppins-Regular.ttf"),
          "Poppins-Semibold": require("./src/fonts/Poppins/Poppins-SemiBold.ttf"),
          "Poppins-Bold": require("./src/fonts/Poppins/Poppins-Bold.ttf"),
        });
        console.log("Шрифты загружены");

        await new Promise((resolve) => setTimeout(resolve, 5000));
      } catch (error) {
        console.warn("Error loading assets:", error);
      } finally {
        setAppReady(true);
      }
    }

    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#FFD57B" />
      {(!isAnimationComplete || !isAppReady) && (
        <AnimatedLottieView
          style={{
            backgroundColor: "#FFD57B",
            width: "100%",
            height: "100%",
            opacity: animationProgress.current,
          }}
          source={require("./src/animation/LionSplash.json")}
          progress={animationProgress.current}
        />
      )}
      {isAnimationComplete && isAppReady && <Main />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

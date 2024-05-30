import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Platform,
} from "react-native";

const Button = ({ navigation, component, title, color, onPressFunc }) => {
  const [isLogInPressed, setIsLogInPressed] = useState(false);

  const handleLogInPressIn = () => {
    setIsLogInPressed(true);
  };

  const handleLogInPressOut = () => {
    setIsLogInPressed(false);
  };

  const onPress = () => {
    onPressFunc && onPressFunc();
    component && navigation.navigate(`${component}`);
  };

  return (
    <TouchableHighlight
      onPress={onPress}
      style={styles.touchable}
      onPressIn={color === "white" ? handleLogInPressIn : null}
      onPressOut={color === "white" ? handleLogInPressOut : null}
    >
      <View
        style={[
          styles.button,
          color === "white" && styles.buttonWhite,
          isLogInPressed && styles.buttonPressed,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            color === "white" && styles.buttonTextYellow,
            isLogInPressed && styles.buttonTextPressed,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    position: "relative",
    ...Platform.select({
      ios: {
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: "#000",
      },
    }),
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
  title: {
    color: "#650000",
    fontSize: 37,
    fontFamily: "Poppins-Semibold",
  },
  text: {
    color: "#650000",
    fontSize: 19,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    height: 99,
  },
  button: {
    backgroundColor: "#F2C700",
    width: 302,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonPressed: {
    backgroundColor: "#F2C700",
    borderColor: "transparent",
  },
  buttonWhite: {
    backgroundColor: "#FFFFFF",
    borderColor: "#F2C700",
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 25,
    fontFamily: "Poppins-Light",
    color: "#ffffff",
  },
  buttonTextYellow: {
    color: "#F2C600",
  },
  buttonTextPressed: {
    color: "#ffffff",
  },
});

export default Button;

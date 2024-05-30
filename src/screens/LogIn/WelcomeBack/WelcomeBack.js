import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../../../components/Button/Button";
import { SvgXml } from "react-native-svg";
import { welcomeBackLionIcon } from "../../../images/svg/login/welcomeBackLion-svg";

const WelcomeBack = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <SvgXml style={styles.logo} xml={welcomeBackLionIcon} />
      <Text style={styles.text}>
        You have successfully reset and create a new password.
      </Text>
      <Button title="HOME" navigation={navigation} component={"TabNavigator"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 56,
  },
  title: {
    marginBottom: 27,
    fontFamily: "Poppins-Medium",
    fontSize: 32,
    color: "#F2C600",
  },

  logo: {
    width: 198,
    height: 247,
    marginBottom: 33,
  },
  text: {
    width: 291,
    marginBottom: 61,
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#650000",
    textAlign: "center",
  },
});

export default WelcomeBack;

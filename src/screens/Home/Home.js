import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ChatBubble from "react-native-chat-bubble";
import { StatusBar } from "expo-status-bar";
import Button from "../../components/Button/Button";
import { SvgXml } from "react-native-svg";
import { crownLion } from "../../images/svg/onboarding/crown-lion-svg";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="#FFFFFF" />
      <ChatBubble
        style={styles.speechBubble}
        isOwnMessage={true}
        bubbleColor="#FAFAFA"
        tailColor="#D3D1D1"
        withTail={true}
      >
        <Text style={styles.speechText}>Hello, I'm Lion!</Text>
      </ChatBubble>
      <View style={styles.logoWrapper}>
        <SvgXml style={styles.logo} xml={crownLion} />
        <Text style={styles.title}>LIONGO</Text>
        <Text style={styles.text}>
          Learn Languages whenever and wherever you want. It's free forever.
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="GET STARTED"
          navigation={navigation}
          component={"ChooseNativeLanguage"}
        />
        <Button
          title="LOG IN"
          navigation={navigation}
          component={"SignIn"}
          color="white"
        />
      </View>
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
    paddingBottom: 42,
    paddingTop: 56,
  },
  speechBubble: {
    borderWidth: 1,
    borderColor: "#D3D1D1",
    height: 34,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  speechText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#650000",
  },
  logoWrapper: {
    gap: 12,
    alignItems: "center",
    marginBottom: 54,
  },
  logo: {
    width: 206,
    height: 244,
    marginTop: 18,
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
  buttonWrapper: {
    gap: 25,
  },
});

export default Home;

import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import ChatBubble from "react-native-chat-bubble";
import Button from "../../../../components/Button/Button";
import { SvgXml } from "react-native-svg";
import { welcomeLion } from "../../../../images/svg/onboarding/welcomeLion-svg";

const CreateProfileWelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <ChatBubble
          isOwnMessage={true}
          bubbleColor="#FAFAFA"
          tailColor="#D3D1D1"
          withTail={true}
          style={styles.speechBubble}
        >
          <Text style={styles.speechText}>Awesome!</Text>
        </ChatBubble>
        <View style={styles.logoWrapper}>
          <SvgXml style={styles.logo} xml={welcomeLion} />
          <Text style={styles.text}>
            Create a profile now, so you can save progress and connect with
            friends. Or you can skip it.
          </Text>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="CREATE A PROFILE"
          navigation={navigation}
          component={"CreatingProfile"}
        />
        <Button
          title="SKIP"
          navigation={navigation}
          // component={"/"}
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
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 42,
  },
  mainContent: { alignItems: "center" },
  speechBubble: {
    borderWidth: 1,
    borderColor: "#D3D1D1",
    height: 34,
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 54,
  },
  speechText: {
    fontSize: 12,
    fontFamily: "Poppins-Regular",
    color: "#650000",
  },
  logoWrapper: {
    gap: 27,
    alignItems: "center",
  },
  logo: {
    width: 193,
    height: 234,
    marginTop: 35.29,
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

export default CreateProfileWelcomeScreen;

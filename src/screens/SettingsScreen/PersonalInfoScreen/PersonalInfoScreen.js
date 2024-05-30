import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";
import { backArrowIcon } from "../../../images/svg/backArrowIcon-svg";
import { lionLogo } from "../../../images/svg/lion-svg";
import { nameIcon } from "../../../images/svg/form/name-svg";
import { emailIcon } from "../../../images/svg/form/email-svg";
import { dateIcon } from "../../../images/svg/form/dateIcon-svg";
import Button from "../../../components/Button/Button";

const { width } = Dimensions.get("window");

const PersonalInfoScreen = ({ navigation }) => {
  const [name, setName] = useState("Olena Bahrii");
  const [email, setEmail] = useState("olena.bahrii@powercoders.org");
  const [date, setDate] = useState("27.07.1989");

  const nameHandler = (text) => setName(text);
  const emailHandler = (text) => setEmail(text);
  const dateHandler = (text) => setDate(text);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          animated={true}
          backgroundColor="#FFFFFF"
        />
        <SafeAreaView style={styles.mainContent}>
          <View style={styles.mainContent}>
            <View>
              <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <SvgXml xml={backArrowIcon} />
                </TouchableOpacity>
                <Text style={styles.title}>Personal Info</Text>
              </View>

              <View style={styles.photo}>
                <SvgXml
                  xml={lionLogo}
                  width="60"
                  height="60"
                  viewBox="0 0 99 99"
                />
              </View>
              <Text style={styles.name}>Olena Bahrii</Text>
              <Text style={styles.date}>Joined since 10th May 2024</Text>
              <View style={styles.divider} />
              <View style={styles.form}>
                <View>
                  <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={nameHandler}
                    inputmode="text"
                    cursorColor="#9E9E9E"
                    enterKeyHint="next"
                  />
                  <SvgXml style={styles.icon} xml={nameIcon} />
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#9E9E9E"
                    value={email}
                    onChangeText={emailHandler}
                    inputmode="email"
                    keyboardType="email-address"
                    cursorColor="#650000"
                    autoComplete="email"
                  />
                  <SvgXml style={styles.icon} xml={emailIcon} />
                </View>
                <View style={{ position: "relative" }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Date"
                    placeholderTextColor="#9E9E9E"
                    value={date}
                    onChangeText={dateHandler}
                    inputmode="text"
                    cursorColor="#650000"
                  />
                  <SvgXml style={styles.icon} xml={dateIcon} />
                </View>
              </View>
            </View>
            <Button
              navigation={navigation}
              title="SAVE"
              onPressFunc={() => navigation.goBack()}
            />
          </View>
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PersonalInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 23,
    paddingBottom: 74,
  },
  mainContent: {
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: width / 2 - 23 - 16 - 130 / 2,
    marginBottom: 42,
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 19,
    color: "#650000",
  },
  photo: {
    width: 75,
    height: 75,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
    borderColor: "#FFD57B",
    borderWidth: 1,
    marginTop: 27,
    marginBottom: 10,
  },
  name: {
    fontFamily: "Poppins-Regular",
    fontSize: 19,
    color: "#650000",
    alignSelf: "center",
    marginBottom: 10,
  },
  date: {
    fontFamily: "Poppins-Light",
    fontSize: 12,
    color: "#9E9E9E",
    alignSelf: "center",
    marginBottom: 17,
  },
  divider: {
    width: 313,
    height: 2,
    backgroundColor: "#FBFBFB",
    borderRadius: 20,
    marginBottom: 49,
    alignSelf: "center",
  },
  form: {
    width: "100%",
    gap: 17,
    alignItems: "center",
    paddingHorizontal: 19,
  },
  input: {
    width: 291,
    paddingLeft: 52,
    height: 57,
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    fontSize: 14,
    color: "#9E9E9E",
    fontFamily: "Poppins-Regular",
  },
  icon: {
    position: "absolute",
    left: 21.92,
    top: 20,
    width: 18,
    height: 18,
  },
});

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import Button from "../../../components/Button/Button";
import { SvgXml } from "react-native-svg";
import { setPasswordIcon } from "../../../images/svg/login/setPassword-svg";
import { passwordIcon } from "../../../images/svg/form/password-svg";
import { hide } from "../../../images/svg/form/hide-svg";

const NewPassword = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");

  const [isSecure, setSecure] = useState(true);

  const passwordHandler = (text) => setPassword(text);
  const repeatPasswordHandler = (text) => setrepeatPassword(text);

  const onPasswordShowToggle = (x) => {
    setSecure((prev) => !prev);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SvgXml style={styles.logo} xml={setPasswordIcon} />
        <Text style={styles.text}>
          Save the new password in a safe place, if you forget it then you have
          to do a password reset again.
        </Text>
        <View style={styles.form}>
          <View style={{ position: "relative" }}>
            <TextInput
              style={styles.input}
              placeholder="New password"
              placeholderTextColor="#9E9E9E"
              value={password}
              onChangeText={passwordHandler}
              secureTextEntry={isSecure}
              inputmode="text"
              cursorColor="#650000"
            />
            <SvgXml style={styles.icon} xml={passwordIcon} />
            <TouchableOpacity
              style={styles.hide}
              onPress={onPasswordShowToggle}
            >
              <SvgXml style={{ width: 20, height: 20 }} xml={hide} />
            </TouchableOpacity>
          </View>
          <View style={{ position: "relative" }}>
            <TextInput
              style={styles.input}
              placeholder="New password"
              placeholderTextColor="#9E9E9E"
              value={repeatPassword}
              onChangeText={repeatPasswordHandler}
              secureTextEntry={isSecure}
              inputmode="text"
              cursorColor="#650000"
            />
            <SvgXml style={styles.icon} xml={passwordIcon} />
            <TouchableOpacity
              style={styles.hide}
              onPress={onPasswordShowToggle}
            >
              <SvgXml style={{ width: 20, height: 20 }} xml={hide} />
            </TouchableOpacity>
          </View>
        </View>
        <Button
          title="SAVE"
          navigation={navigation}
          component={"WelcomeBack"}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 56,
  },
  logo: {
    width: 114,
    height: 114,
    marginTop: 42,
  },
  text: {
    width: 291,
    marginTop: 37,
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#650000",
    textAlign: "center",
  },
  form: {
    width: "100%",
    gap: 20,
    marginTop: 25,
    marginBottom: 42,
    alignItems: "center",
  },
  input: {
    width: 291,
    paddingLeft: 52,
    height: 57,
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    fontSize: 14,
    color: "#650000",
    fontFamily: "Poppins-Regular",
  },
  icon: {
    position: "absolute",
    left: 21.92,
    top: 20,
    width: 18,
    height: 18,
  },
  hide: {
    position: "absolute",
    right: 23,
    top: 19,
  },
});

export default NewPassword;

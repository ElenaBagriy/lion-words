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
import { createProfileLion } from "../../../images/svg/onboarding/createProfileLion-svg";
import { emailIcon } from "../../../images/svg/form/email-svg";
import { passwordIcon } from "../../../images/svg/form/password-svg";
import { hide } from "../../../images/svg/form/hide-svg";
import { checkedIcon } from "../../../images/svg/form/checked-svg";
import { google } from "../../../images/svg/social/google-svg";
import { facebook } from "../../../images/svg/social/facebook-svg";
import { appleLogin } from "../../../images/svg/social/appleLogin-svg";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSecure, setSecure] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onPasswordShowToggle = (x) => {
    setSecure((prev) => !prev);
  };
  const toggleCheckBox = () => {
    setIsChecked(!isChecked);
  };
  const loginWithSocial = () => {};
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <SvgXml style={styles.logo} xml={createProfileLion} />
          <View style={styles.form}>
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
                placeholder="Password"
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
                <SvgXml xml={hide} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={toggleCheckBox}
            style={styles.onRememberBtn}
          >
            <View
              style={[styles.checkBox, isChecked && styles.checkBoxChecked]}
              value={isChecked}
              onValueChange={toggleCheckBox}
            >
              {isChecked && <SvgXml xml={checkedIcon} />}
            </View>
            <Text style={styles.textCheck}>Remember me</Text>
          </TouchableOpacity>
          <Button
            title="LOG IN"
            navigation={navigation}
            component={"TabNavigator"}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
            style={styles.passwordLink}
          >
            <Text style={styles.textLink}>Forgot the password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btmWrapper}>
          <View style={styles.dividerWrapper}>
            <View style={styles.divider}></View>
            <Text style={styles.socialText}>or continue with</Text>
            <View style={styles.divider}></View>
          </View>
          <View style={styles.linkWrapper}>
            <TouchableOpacity
              style={styles.socialBtn}
              onPress={loginWithSocial}
            >
              <SvgXml style={styles.socialImg} xml={facebook} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialBtn}
              onPress={loginWithSocial}
            >
              <SvgXml style={styles.socialImg} xml={google} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialBtn}
              onPress={loginWithSocial}
            >
              <SvgXml style={styles.socialImg} xml={appleLogin} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    paddingBottom: 56,
  },
  mainContent: {
    alignItems: "center",
    width: "100%",
  },
  logo: {
    width: 139,
    height: 105,
    marginTop: 31,
  },
  form: {
    width: "100%",
    gap: 32,
    marginTop: 31,
    alignItems: "center",
  },
  input: {
    width: 291,
    paddingLeft: 52,
    height: 57,
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    fontSize: 16,
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
    top: 21.92,
  },
  onRememberBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    marginTop: 26,
    marginBottom: 20,
  },
  checkBox: {
    borderColor: "#FFD57B",
    borderWidth: 1,
    borderRadius: 4,
    width: 16,
    height: 16,
  },
  checkBoxChecked: {
    backgroundColor: "#FFD57B",
    alignItems: "center",
    justifyContent: "center",
  },
  textCheck: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    color: "#650000",
  },
  passwordLink: {
    marginTop: 26,
  },
  textLink: {
    fontSize: 14,
    fontFamily: "Poppins-Medium",
    color: "#650000",
  },
  btmWrapper: {
    alignItems: "center",
    gap: 30,
  },
  dividerWrapper: {
    flexDirection: "row",
    gap: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    width: 71,
    height: 1,
    backgroundColor: "#EEEEEE",
  },
  socialText: {
    fontFamily: "Poppins-Light",
    fontSize: 18,
    color: "#650000",
  },
  linkWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  socialBtn: {
    width: 88,
    height: 60,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    alignItems: "center",
    justifyContent: "center",
  },
  socialImg: {
    width: 24,
    height: 24,
  },
});

export default SignIn;

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Button from "../../../components/Button/Button";
import { SvgXml } from "react-native-svg";
import { forgotPassIcon } from "../../../images/svg/login/forgotPass-svg";
import { emailIcon } from "../../../images/svg/form/email-svg";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const emailHandler = (text) => setEmail(text);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SvgXml style={styles.logo} xml={forgotPassIcon} />
        <Text style={styles.text}>
          Enter the email address to get an OTP code to reset your password.
        </Text>
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
        </View>
        <Button
          title="GET CODE"
          navigation={navigation}
          component={"PasswordReset"}
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
    width: 135,
    height: 135,
    marginTop: 21,
  },
  text: {
    marginTop: 37,
    width: 291,
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#650000",
    textAlign: "center",
  },
  form: {
    width: "100%",
    marginTop: 22,
    marginBottom: 45,
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
});

export default ForgotPassword;

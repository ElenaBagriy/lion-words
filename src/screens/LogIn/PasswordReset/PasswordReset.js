import React, { useState, useEffect, useRef } from "react";
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
import { openEmailIcon } from "../../../images/svg/login/open-email-svg";

const PasswordReset = ({ navigation }) => {
  const [code, setCode] = useState("");
  const [timer, setTimer] = useState(60);

  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);

  const handleTextChange = (text, currentInput, nextInput) => {
    setCode((prevCode) => {
      const newCode = prevCode + text;
      if (newCode.length > 4) {
        return prevCode;
      }
      return newCode;
    });
    if (text.length === 1 && nextInput) {
      nextInput.current.focus();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(interval);
        }
        return Math.max(prevTimer - 1, 0);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SvgXml style={styles.logo} xml={openEmailIcon} />
        <Text style={styles.text}>
          We've sent you the otp verification code to your email address. Check
          your email and enter the code bellow.
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            ref={input1Ref}
            defaultValue={code[0]}
            cursorColor="#797373"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) =>
              handleTextChange(text, input1Ref, input2Ref)
            }
          />
          <TextInput
            ref={input2Ref}
            style={styles.input}
            defaultValue={code[1]}
            cursorColor="#797373"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) =>
              handleTextChange(text, input2Ref, input3Ref)
            }
          />
          <TextInput
            ref={input3Ref}
            style={styles.input}
            defaultValue={code[2]}
            cursorColor="#797373"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) =>
              handleTextChange(text, input3Ref, input4Ref)
            }
          />
          <TextInput
            ref={input4Ref}
            style={styles.input}
            defaultValue={code[3]}
            cursorColor="#797373"
            keyboardType="numeric"
            maxLength={1}
            onChangeText={(text) => handleTextChange(text, input4Ref, null)}
          />
        </View>
        <Text style={styles.textQuestion}>Didn't receive email?</Text>
        <View style={styles.resendWrapper}>
          <Text style={styles.resendText}>You can</Text>
          <TouchableOpacity
            onPress={() => {
              // Логика повторной отправки кода
            }}
          >
            <Text style={styles.button}> resend code </Text>
          </TouchableOpacity>
          <Text style={styles.resendText}>in </Text>
          <Text style={styles.seconds}>{timer}</Text>
          <Text style={styles.resendText}> seconds</Text>
        </View>
        <Button
          title="CONFIRM"
          navigation={navigation}
          component={"NewPassword"}
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
    width: 109,
    height: 109,
    marginTop: 42,
  },
  text: {
    marginTop: 42,
    width: 302,
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    color: "#650000",
    textAlign: "center",
  },
  form: {
    width: "100%",
    marginTop: 44,
    justifyContent: "center",
    gap: 16,
    flexDirection: "row",
  },
  input: {
    width: 65,
    height: 65,
    paddingLeft: 23,
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
    fontSize: 30,
    color: "#797373",
    fontFamily: "Poppins-Regular",
  },
  resendWrapper: {
    flexDirection: "row",
    marginTop: 12,
    marginBottom: 27,
  },
  textQuestion: {
    marginTop: 26,
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#650000",
  },
  resendText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "#650000",
  },
  button: {
    fontFamily: "Poppins-Medium",
    fontSize: 14,
    color: "#650000",
    textDecorationStyle: "solid",
    textDecorationColor: "#650000",
    textDecorationLine: "underline",
  },
  seconds: {
    width: 21,
    textAlign: "center",
    fontFamily: "Poppins-Bold",
    fontSize: 15,
    color: "#FFD57B",
  },
});

export default PasswordReset;

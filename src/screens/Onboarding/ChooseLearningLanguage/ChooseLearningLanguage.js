import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Button from "../../../components/Button/Button";
import LanguagePicker from "../../../components/LanguagePicker/LanguagePicker";
import { languages } from "../../../data/languages";
import { SvgXml } from "react-native-svg";
import { lazyLion } from "../../../images/svg/onboarding/lazyLion-svg";

const ChooseLearningLanguage = ({ navigation }) => {
  const [inputValue, setinputValue] = useState("");
  const [filteredLanguages, setFilteredLanguages] = useState(languages);

  const inputHandler = (text) => {
    setinputValue(text);

    const filtered = languages.filter(({ name }) =>
      name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredLanguages(filtered);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.mainContent}>
          <View style={styles.headerWrapper}>
            <Text style={styles.title}>
              Choose what language you want to learn.
            </Text>
            <SvgXml style={styles.image} xml={lazyLion} />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={inputHandler}
            value={inputValue}
            placeholder="Search language"
            keyboardType="default"
          />
          <LanguagePicker data={filteredLanguages} defaultValue="German" />
        </View>
        <Button
          title="NEXT"
          navigation={navigation}
          component={"ChooseSourceScreen"}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 37,
    paddingTop: 27,
  },
  mainContent: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  headerWrapper: {
    position: "relative",
    width: 252,
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    color: "#650000",
    textAlign: "center",
  },
  image: {
    position: "absolute",
    left: -38,
    top: -2,
    width: 44,
    height: 51,
  },
  input: {
    paddingVertical: 16,
    paddingLeft: 19,
    marginVertical: 25,
    borderWidth: 1,
    borderColor: "#EEDDEE",
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    width: "100%",
  },
});

export default ChooseLearningLanguage;

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Button from "../../../components/Button/Button";
import LanguagePicker from "../../../components/LanguagePicker/LanguagePicker";
import { languages } from "../../../data/languages";
import { SvgXml } from "react-native-svg";
import { backArrowIcon } from "../../../images/svg/backArrowIcon-svg";

const { width } = Dimensions.get("window");

const ChangeTargetLanguage = ({ navigation }) => {
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
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          animated={true}
          backgroundColor="#FFFFFF"
        />
        <SafeAreaView style={styles.mainContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SvgXml xml={backArrowIcon} />
            </TouchableOpacity>
            <Text style={styles.title}>Target Language</Text>
          </View>
          <TextInput
            style={styles.input}
            onChangeText={inputHandler}
            value={inputValue}
            placeholder="Search language"
            keyboardType="default"
          />
          <LanguagePicker data={filteredLanguages} defaultValue="German" />
          <Button
            title="SAVE"
            navigation={navigation}
            onPressFunc={() => navigation.goBack()}
          />
        </SafeAreaView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 21,
    paddingBottom: 37,
  },
  mainContent: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: width / 2 - 23 - 16 - 150 / 2,
    marginBottom: 21,
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 19,
    color: "#650000",
  },
  input: {
    paddingVertical: 16,
    paddingLeft: 19,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: "#EEDDEE",
    backgroundColor: "#F9F9F9",
    borderRadius: 12,
    width: "100%",
  },
});

export default ChangeTargetLanguage;

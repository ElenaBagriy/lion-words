import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../../../components/Button/Button";
import LanguagePicker from "../../../components/LanguagePicker/LanguagePicker";
import { reasons } from "../../../data/reasons";
import { SvgXml } from "react-native-svg";
import { drinkLion } from "../../../images/svg/onboarding/drinkLion-svg";

const ChooseReasonsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>Why are you learning English ?</Text>
          <SvgXml style={styles.image} xml={drinkLion} />
        </View>
        <LanguagePicker data={reasons} />
      </View>
      <Button
        title="NEXT"
        navigation={navigation}
        component={"SetRemindersScreen"}
      />
    </View>
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
    width: 189,
    marginBottom: 20,
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    color: "#650000",
    textAlign: "center",
  },
  image: {
    position: "absolute",
    right: -53,
    bottom: 8.19,
    width: 44,
    height: 57.21,
  },
});

export default ChooseReasonsScreen;

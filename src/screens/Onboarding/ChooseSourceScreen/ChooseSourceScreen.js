import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "../../../components/Button/Button";
import LanguagePicker from "../../../components/LanguagePicker/LanguagePicker";
import { sources } from "../../../data/sourcesOfInfo";
import { SvgXml } from "react-native-svg";
import { standingLion } from "../../../images/svg/onboarding/standingLion-svg";

const ChooseSourceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.headerWrapper}>
          <Text style={styles.title}>How did you know about LionGo ?</Text>
          <SvgXml style={styles.image} xml={standingLion} />
        </View>
        <LanguagePicker data={sources} />
      </View>
      <Button
        title="NEXT"
        navigation={navigation}
        component={"ChooseReasonsScreen"}
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
    left: -49.98,
    bottom: 8.36,
    width: 42.62,
    height: 66.64,
  },
});

export default ChooseSourceScreen;

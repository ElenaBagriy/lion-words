import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Platform,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { backArrowIcon } from "../../images/svg/backArrowIcon-svg";
import { profileIcon } from "../../images/svg/bottomNav/profileIcon-svg";
import { chevronRightIcon } from "../../images/svg/chevronRightIcon-svg";
import { lockIcon } from "../../images/svg/lockIcon-svg";
import { moonIcon } from "../../images/svg/moonIcon-svg";
import { languageIcon } from "../../images/svg/languageIcon-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { germanFlagIcon } from "../../images/svg/flags/germanFlagIcon-svg";
import { helpIcon } from "../../images/svg/helpIcon-svg";
import { aboutIcon } from "../../images/svg/aboutIcon-svg";
import { logoutIcon } from "../../images/svg/logoutIcon-svg";

const { width } = Dimensions.get("window");

const SettingsScreen = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleSwitch = () => {
    setDarkMode((previousState) => !previousState);
    console.log(darkMode);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        animated={true}
        backgroundColor="#FFFFFF"
      />
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <SvgXml xml={backArrowIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>Settings</Text>
        </View>
        <View style={styles.mainContent}>
          <TouchableOpacity
            style={styles.block}
            onPress={() => navigation.navigate("PersonalInfoScreen")}
          >
            <View style={styles.blockLeft}>
              <View style={styles.icon}>
                <SvgXml xml={profileIcon} fill="#F2C600" />
              </View>
              <Text style={styles.text}>Personal Info</Text>
            </View>
            <SvgXml xml={chevronRightIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.block}
            onPress={() => navigation.navigate("SecurityScreen")}
          >
            <View style={styles.blockLeft}>
              <View style={[styles.icon, { backgroundColor: "#D7D7D7" }]}>
                <SvgXml xml={lockIcon} />
              </View>
              <Text style={styles.text}>Security</Text>
            </View>
            <SvgXml xml={chevronRightIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.block}
            onPress={toggleSwitch}
            activeOpacity={0.8}
          >
            <View style={styles.blockLeft}>
              <View style={[styles.icon, { backgroundColor: "#C4D5FF" }]}>
                <SvgXml xml={moonIcon} />
              </View>
              <Text style={styles.text}>Dark Mode</Text>
            </View>
            <View style={[styles.switch, darkMode ? styles.darkMode : null]}>
              <View
                style={[styles.thumb, darkMode ? styles.thumbDarkMode : null]}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.block}
            onPress={() => navigation.navigate("ChangeTargetLanguage")}
          >
            <View style={styles.blockLeft}>
              <View style={[styles.icon, { backgroundColor: "#FFEC96" }]}>
                <SvgXml xml={languageIcon} />
              </View>
              <Text style={styles.text}>Language</Text>
            </View>
            <SvgXml xml={germanFlagIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.block}>
            <View style={styles.blockLeft}>
              <View style={[styles.icon, { backgroundColor: "#C6FFAB" }]}>
                <SvgXml xml={helpIcon} />
              </View>
              <Text style={styles.text}>Help Center</Text>
            </View>
            <SvgXml xml={chevronRightIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.block}>
            <View style={styles.blockLeft}>
              <View style={[styles.icon, { backgroundColor: "#BDF7FF" }]}>
                <SvgXml xml={aboutIcon} />
              </View>
              <Text style={styles.text}>About LionGo</Text>
            </View>
            <SvgXml xml={chevronRightIcon} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.block}
            onPress={() => navigation.navigate("SignIn")}
          >
            <View style={styles.blockLeft}>
              <View style={[styles.icon, { backgroundColor: "#FFCBCB" }]}>
                <SvgXml xml={logoutIcon} />
              </View>
              <Text style={[styles.text, { color: "#FF6060" }]}>Log Out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 23,
  },
  header: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    gap: width / 2 - 23 - 16 - 90 / 2,
    marginBottom: 42,
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 19,
    color: "#650000",
  },
  mainContent: {
    gap: 15,
  },
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  blockLeft: {
    flexDirection: "row",
    gap: 24,
    alignItems: "center",
  },
  icon: {
    backgroundColor: "#FFEC96",
    borderRadius: 50,
    width: 49,
    height: 49,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Poppins-Light",
    fontSize: 19,
    color: "#650000",
  },
  switch: {
    width: 28,
    height: 14,
    borderRadius: 20,
    backgroundColor: "#C1C2C1",
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
  darkMode: {
    backgroundColor: "#1AB900",
  },
  thumb: {
    width: 14,
    height: 14,
    borderRadius: 20,
    backgroundColor: "#fff",
    ...Platform.select({
      ios: {
        shadowOffset: { width: -4, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
      },
    }),
    ...Platform.select({
      android: {
        elevation: 4,
      },
    }),
  },
  thumbDarkMode: {
    transform: [{ translateX: 14 }],
  },
});

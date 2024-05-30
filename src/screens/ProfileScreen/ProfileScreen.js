import React from "react";
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
import { lionLogo } from "../../images/svg/lion-svg";
import { settingsIcon } from "../../images/svg/settingsIcon-svg";
import { editIcon } from "../../images/svg/editIcon-svg";
import { statisticsIcon } from "../../images/svg/statisticsIcon-svg";
import { lessonsPassedIcon } from "../../images/svg/lessonsPassedIcon-svg";
import { wordsLearnedIcon } from "../../images/svg/wordsLearnedIcon-svg";
import { SafeAreaView } from "react-native-safe-area-context";

const ProfilePage = ({ navigation }) => {
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
          <TouchableOpacity style={styles.avatar}>
            <SvgXml xml={lionLogo} width="19" height="19" viewBox="0 0 99 99" />
          </TouchableOpacity>
          <Text style={styles.title}>Account</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("SettingsScreen")}
          >
            <SvgXml xml={settingsIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.photo}>
          <SvgXml xml={lionLogo} width="60" height="60" viewBox="0 0 99 99" />
        </View>
        <Text style={styles.name}>Olena Bahrii</Text>
        <Text style={styles.date}>Joined since 10th May 2024</Text>
        <View style={styles.divider}></View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("PersonalInfoScreen")}
        >
          <SvgXml xml={editIcon} />
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <View style={styles.statistic}>
          <SvgXml xml={statisticsIcon} />
          <Text style={styles.statisticTitle}>Statistics</Text>
        </View>
        <View style={styles.mainContent}>
          <View style={styles.block}>
            <SvgXml xml={lessonsPassedIcon} />
            <View style={styles.rightBlockPart}>
              <Text style={styles.number}>576</Text>
              <Text style={styles.numberText}>Lessons Passed</Text>
            </View>
          </View>
          <View style={styles.block}>
            <SvgXml xml={wordsLearnedIcon} />
            <View style={styles.rightBlockPart}>
              <Text style={styles.number}>1576</Text>
              <Text style={styles.numberText}>Learned Words</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 6,
    backgroundColor: "#F2C600",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 23,
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
    marginBottom: 20,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#F2C600",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 4,
    borderRadius: 13,
    height: 36,
    paddingHorizontal: 23,
    marginBottom: 27,
    alignSelf: "center",
    ...Platform.select({
      ios: {
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
    }),
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
  buttonText: {
    fontFamily: "Poppins-Light",
    fontSize: 13,
    color: "#FFFFFF",
  },
  statistic: {
    flexDirection: "row",
    gap: 5,
    alignSelf: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  statisticTitle: {
    fontFamily: "Poppins-Light",
    fontSize: 16,
    color: "#650000",
  },
  mainContent: {
    paddingHorizontal: 23,
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "space-around",
  },
  block: {
    flexDirection: "row",
    gap: 11,
    justifyContent: "center",
    padding: 13,
    borderColor: "#DDDDDD",
    borderWidth: 1,
    borderRadius: 13,
  },
  number: {
    fontFamily: "Poppins-Light",
    fontSize: 16,
    color: "#650000",
  },
  numberText: {
    fontFamily: "Poppins-Regular",
    fontSize: 10,
    color: "#9E9E9E",
  },
  rightBlockPart: {
    alignItems: "center",
    justifyContent: "space-between",
  },
});

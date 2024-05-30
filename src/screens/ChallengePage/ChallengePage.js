import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { lionLogo } from "../../images/svg/lion-svg";
import { mountainIcon } from "../../images/svg/mountainIcon-svg";
import { certifiedIcon } from "../../images/svg/certifiedIcon-svg";
import { goalAwardIcon } from "../../images/svg/goalAwardIcon-svg";

import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const ChallengePage = ({ navigation }) => {
  let total = 2;
  let completed = 0;
  const progress = completed / total;

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
          <Text style={styles.title}>Challenge</Text>
        </View>
        <SvgXml style={styles.logo} xml={mountainIcon} />

        <View style={styles.mainContent}>
          <View style={styles.award}>
            <View>
              <SvgXml xml={certifiedIcon} />
            </View>
            <View style={styles.awardDetails}>
              <Text style={styles.mainText}>Get 2 Perfect Lessons</Text>
              <View style={styles.progressBarWrapper}>
                <View style={styles.progressBar}>
                  <View style={[styles.progress, { flex: progress }]} />
                  <View style={[styles.remaining, { flex: 1 - progress }]} />
                </View>
                <Text style={styles.progressText}>0/2</Text>
              </View>
            </View>
          </View>
          <View style={styles.award}>
            <View>
              <SvgXml xml={goalAwardIcon} />
            </View>
            <View style={styles.awardDetails}>
              <Text style={styles.mainText}>Complete 1 Challenge</Text>
              <View style={styles.progressBarWrapper}>
                <View style={styles.progressBar}>
                  <View style={[styles.progress, { flex: 1 }]} />
                  <View style={[styles.remaining, { flex: 1 - 1 }]} />
                </View>
                <Text style={styles.progressText}>1/1</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ChallengePage;

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
    justifyContent: "flex-start",
    alignItems: "center",
    gap: width / 2 - 30 - 23 - 110 / 2,
    paddingHorizontal: 23,
  },
  title: {
    fontFamily: "Poppins-Regular",
    fontSize: 19,
    color: "#650000",
  },
  logo: {
    alignSelf: "center",
    marginTop: 37,
    marginBottom: 36,
  },
  mainContent: {
    paddingHorizontal: 38,
    gap: 18,
  },
  award: {
    paddingVertical: 15,
    paddingHorizontal: 19,
    borderColor: "#EEEEEE",
    borderWidth: 1,
    borderRadius: 9,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  awardDetails: {
    gap: 9,
  },
  mainText: {
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    color: "#650000",
  },
  progressBarWrapper: {
    flexDirection: "row",
    gap: 11,
    alignItems: "center",
  },
  progressBar: {
    flexDirection: "row",
    height: 7,
    width: 168,
    borderRadius: 20,
    overflow: "hidden",
  },
  progress: {
    backgroundColor: "#F2C600",
  },
  remaining: {
    backgroundColor: "#ECECEC",
  },
  progressText: {
    fontFamily: "Poppins-Medium",
    fontSize: 10,
    color: "#F2C600",
  },
});

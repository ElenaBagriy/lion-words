import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { SvgXml } from "react-native-svg";
import { goalIcon } from "../../images/svg/actionsPage/goal-svg";
import { lionLogo } from "../../images/svg/lion-svg";
import { dartsIcon } from "../../images/svg/actionsPage/darts-svg";
import { germanFlagIcon } from "../../images/svg/flags/germanFlagIcon-svg";
import Swiper from "react-native-swiper";
import PaginationDots from "../../components/PaginationDots/PaginationDots";
import LessonsList from "./LessonsList/LessonsList";

const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

const ActionPage = ({ navigation }) => {
  const [pageNumber, setPagenumber] = useState(0);
  const [level, setLevel] = useState("A1.1");

  const onPagination = (index) => {
    setPagenumber(index);
    switch (index) {
      case 0:
        setLevel("A1.1");
        break;
      case 1:
        setLevel("A1.2");
        break;
      case 2:
        setLevel("A2.1");
        break;
      case 3:
        setLevel("A2.2");
        break;
      case 4:
        setLevel("B1.1");
        break;
      case 5:
        setLevel("B1.2");
        break;
      case 6:
        setLevel("B2.1");
        break;
      case 7:
        setLevel("B2.2");
        break;
      default:
        setLevel("A1.1");
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        animated={true}
        backgroundColor="#F2C600"
      />
      <LinearGradient colors={["#F2C600", "#FFDA32"]} style={styles.background}>
        <TouchableOpacity style={styles.avatar}>
          <SvgXml xml={lionLogo} width="40" height="40" viewBox="0 0 99 99" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.goal}>
          <SvgXml xml={dartsIcon} />
          <Text style={styles.goalText}>38</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <SvgXml xml={germanFlagIcon} />
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.levelNav}>
        <SvgXml xml={goalIcon} />
        <Text style={styles.levelTextMain}>Level</Text>
        <View style={styles.levelWrapper}>
          <Text style={styles.levelTextSecondary}>{level}</Text>
        </View>
      </View>
      <PaginationDots total={8} pageNumber={pageNumber} />

      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
        bounces={true}
        index={0}
        onIndexChanged={(index) => onPagination(index)}
        showsPagination={false}
        loadMinimal={true}
        loadMinimalSize={3}
      >
        <LessonsList navigation={navigation} />

        <View style={styles.slide}>
          <Text style={styles.text}>A1.2</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>A2.1</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>A2.2</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>B1.1</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>B1.2</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>B2.1</Text>
        </View>
        <View style={styles.slide}>
          <Text style={styles.text}>B2.2</Text>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    paddingBottom: 30,
  },
  background: {
    height: 121,
    width: "100%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingBottom: 29,
    paddingHorizontal: 25,
    paddingTop: 49,
  },
  avatar: {
    width: 43,
    height: 43,
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  goal: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    marginBottom: 6,
  },
  goalText: {
    fontFamily: "Poppins-Regular",
    fontSize: 19,
    color: "#FFFFFF",
  },
  levelNav: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginTop: 14,
    marginBottom: 11,
  },
  levelWrapper: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2C600",
    borderRadius: 4,
    height: 20,
    paddingLeft: 6,
    paddingRight: 6,
  },
  levelTextMain: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: "#650000",
  },
  levelTextSecondary: {
    fontFamily: "Poppins-Medium",
    fontSize: 15,
    color: "#650000",
  },
  wrapper: {
    marginTop: 19,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: setBg(),
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default ActionPage;

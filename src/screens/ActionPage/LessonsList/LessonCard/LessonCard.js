import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { colors } from "../../../../data/colors";
import { checkmarkDoneIcon } from "../../../../images/svg/actionsPage/lessons/checkmarkDoneIcon-svg";
import { checkmarkProcessIcon } from "../../../../images/svg/actionsPage/lessons/checkmarkProcessIcon-svg";
import { checkmarkLockIcon } from "../../../../images/svg/actionsPage/lessons/checkmarkLockIcon-svg";
import { playArrowIcon } from "../../../../images/svg/actionsPage/lessons/playArrowIcon-svg";

import TaskProgress from "../../../../components/TaskProgress/TaskProgress";

const LessonCard = ({ item, index, navigation }) => {
  return (
    <View
      style={[styles.lessonCard, { backgroundColor: colors[index].mainColor }]}
    >
      <View style={styles.leftPart}>
        <View style={styles.progressWrapper}>
          <Text style={styles.ammount}>
            {item.learnedWords.length}/{item.words.length}
          </Text>
          <TaskProgress
            completed={item.learnedWords.length}
            total={item.words.length}
          />
          <View style={styles.iconStatus}>
            <SvgXml
              xml={
                item.completed
                  ? checkmarkDoneIcon
                  : !item.completed && item.learnedWords.length === 0
                  ? checkmarkLockIcon
                  : checkmarkProcessIcon
              }
              fill={colors[index].mainColor}
            />
          </View>
        </View>
        <Text style={styles.date}>{item.date}</Text>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: colors[index].buttonCollor },
          ]}
          onPress={() =>
            navigation.navigate("LessonScreen", { item: item, index: index })
          }
        >
          <Text style={styles.buttonText}>
            {item.completed
              ? "View"
              : !item.completed && item.learnedWords.length === 0
              ? "Start"
              : "Next"}
          </Text>
          <SvgXml xml={playArrowIcon} />
        </TouchableOpacity>
      </View>
      <View>
        <SvgXml xml={colors[index].image} />
      </View>
    </View>
  );
};

export default LessonCard;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  lessonCard: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    width: "100%",
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 26,
    marginBottom: 30,
    ...Platform.select({
      ios: {
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
    }),
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
  leftPart: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  ammount: {
    fontFamily: "Poppins-Medium",
    fontSize: 10,
    color: "#FFFFFF",
    marginRight: 3,
  },
  iconStatus: {
    width: 20,
    height: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    marginLeft: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    fontFamily: "Poppins-Medium",
    fontSize: 21,
    color: "#FFFFFF",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    width: 56,
    height: 18,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
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
});

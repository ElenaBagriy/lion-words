import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SvgXml } from "react-native-svg";
import { closeIcon } from "../../images/svg/closeIcon-svg";
import { questionMark } from "../../images/svg/questionMark-svg";

import CorrectAnswer from "../../components/Modals/CorrectAnswer/CorrectAnswer";
import WrongAnswer from "../../components/Modals/WrongAnswer/WrongAnswer";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const LessonScreen = ({ route, navigation }) => {
  const { item } = route.params;

  const [currentWord, setCurrentWord] = useState({});
  const [options, setOptions] = useState([]);
  const [usedWords, setUsedWords] = useState([]);
  const [correctModalVisible, setCorrectModalVisible] = useState(false);
  const [wrongModalVisible, setWrongModalVisible] = useState(false);
  const [selected, setSelected] = useState();

  let total = item.words.length;
  let completed = usedWords.length;
  const progress = completed / total;

  useEffect(() => {
    selectRandomWord();
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const selectRandomWord = () => {
    const availableWords = item.words.filter(
      (word) => !usedWords.includes(word.ukrainian)
    );

    if (availableWords.length === 0) {
      console.log("Урок завершен");
      return;
    }
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const selectedWord = availableWords[randomIndex];
    setCurrentWord(selectedWord);

    const correctTranslation = selectedWord.german;
    const incorrectTranslations = item.words
      .filter((word) => word.german !== correctTranslation)
      .map((word) => word.german);
    const randomIncorrectTranslations = incorrectTranslations
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    const allOptions = [correctTranslation, ...randomIncorrectTranslations];
    setOptions(allOptions.sort(() => Math.random() - 0.5));
  };

  const checkAnswer = (selectedTranslation) => {
    if (selectedTranslation === currentWord.german) {
      setCorrectModalVisible(true);
      setUsedWords((prev) => [...prev, currentWord.ukrainian]);
    } else {
      setWrongModalVisible(true);
    }
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
          <TouchableOpacity onPress={handleGoBack}>
            <SvgXml xml={closeIcon} />
          </TouchableOpacity>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { flex: progress }]} />
            <View style={[styles.remaining, { flex: 1 - progress }]} />
          </View>
        </View>
        <Text style={styles.title}>Choose the word</Text>
        <View style={styles.divider}></View>
        <View style={styles.questionWrapper}>
          <LinearGradient colors={["#F2C600", "#FFDA32"]} style={styles.icon}>
            <SvgXml xml={questionMark} width={15} height={15} fill="#FFFFFF" />
          </LinearGradient>

          <Text style={styles.question}>{currentWord.ukrainian}</Text>
        </View>

        <View style={styles.optionList}>
          {options.map((option, index) => (
            <TouchableOpacity
              style={[
                styles.option,
                selected === option && { borderColor: "#F2C600" },
              ]}
              key={index}
              onPress={() => {
                setSelected(option);
              }}
            >
              <Text
                style={styles.optionText}
              >{`${option.article} ${option.word}`}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
      <CorrectAnswer
        modalVisible={correctModalVisible}
        setModalVisible={setCorrectModalVisible}
        onPressFunc={selectRandomWord}
        setSelected={setSelected}
      />
      {wrongModalVisible && (
        <WrongAnswer
          modalVisible={wrongModalVisible}
          setModalVisible={setWrongModalVisible}
          correctAnswer={`${currentWord?.german.article} ${currentWord?.german.word}`}
          setSelected={setSelected}
        />
      )}
      <TouchableOpacity
        style={[styles.button, !selected && { backgroundColor: "#FFD57B" }]}
        disabled={!selected}
        onPress={() => {
          checkAnswer(selected);
        }}
      >
        <Text style={styles.buttonText}>Check Answer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LessonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    paddingBottom: 31,
    paddingHorizontal: 31,
  },
  header: {
    paddingBottom: 23,
    paddingTop: 28,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: width / 2 - 31 - 13 - 161 / 2,
  },
  progressBar: {
    flexDirection: "row",
    height: 8,
    width: 161,
    borderRadius: 20,
    overflow: "hidden",
  },
  progress: {
    backgroundColor: "#F2C600",
  },
  remaining: {
    backgroundColor: "#ECECEC",
  },
  title: {
    alignSelf: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    color: "#650000",
    marginBottom: 17,
  },
  divider: {
    width: 313,
    height: 2,
    backgroundColor: "#FBFBFB",
    borderRadius: 20,
    marginBottom: 29,
    alignSelf: "center",
  },
  questionWrapper: {
    gap: 11,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 48,
  },
  icon: {
    width: 25,
    height: 25,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  question: {
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    color: "#650000",
  },
  optionList: {
    paddingHorizontal: 20,
    gap: 15,
  },
  option: {
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#EEEEEE",
    borderWidth: 1,
    borderRadius: 9,
  },
  optionText: {
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    color: "#650000",
  },
  button: {
    backgroundColor: "#F2C600",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    ...Platform.select({
      ios: {
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: "#000",
      },
    }),
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
  buttonText: {
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    color: "#FFFFFF",
  },
});

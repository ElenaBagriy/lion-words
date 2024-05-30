import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { wrongIcon } from "../../../images/svg/wrongIcon-svg";

const WrongAnswer = ({
  modalVisible,
  setModalVisible,
  correctAnswer,
  setSelected,
}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalTitle}>
              <View style={styles.icon}>
                <SvgXml xml={wrongIcon} />
              </View>
              <Text style={styles.text}>Wrong!</Text>
            </View>
            <View style={styles.answerWrapper}>
              <Text style={styles.answerSecText}>Correct answer: </Text>
              <Text style={styles.answerMainText}>{correctAnswer}</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setModalVisible(false);
                setSelected("");
              }}
            >
              <Text style={styles.textButton}>Try Again</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "#FF6060",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 29,
    paddingBottom: 33,
    paddingHorizontal: 31,
    width: "100%",
    height: 199,
    justifyContent: "space-between",
    ...Platform.select({
      ios: {
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowColor: "#000",
      },
    }),
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
  modalTitle: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  icon: {
    width: 28,
    height: 28,
    borderRadius: 6,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
    color: "#FFFFFF",
  },
  answerWrapper: {
    flexDirection: "row",
  },
  answerSecText: {
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    color: "#FFFFFF",
  },
  answerMainText: {
    fontFamily: "Poppins-Medium",
    fontSize: 17,
    color: "#FFFFFF",
  },

  button: {
    borderRadius: 20,
    height: 50,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    ...Platform.select({
      ios: {
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowColor: "#000",
      },
    }),
    ...Platform.select({
      android: {
        elevation: 3,
      },
    }),
  },
  textButton: {
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    color: "#FF6060",
  },
});

export default WrongAnswer;

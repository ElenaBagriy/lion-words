import React from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { thumbUpIcon } from "../../../images/svg/thumb-up-svg";

const SucessRegistrationModal = ({ modalVisible, setModalVisible }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Congratulations!</Text>
            <SvgXml style={styles.image} xml={thumbUpIcon} />
            <Text style={styles.text}>
              Your account is ready to use. You will be redirected to the Home
              page in a few seconds..
            </Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 27,
    paddingBottom: 44,
    margin: 44,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitle: {
    marginBottom: 25,
    textAlign: "center",
    fontFamily: "Poppins-Bold",
    fontSize: 23,
    color: "#FFD57B",
  },
  image: {
    width: 117,
    height: 117,
    marginBottom: 18,
  },
  text: {
    fontFamily: "Poppins-Light",
    fontSize: 16,
    color: "#650000",
    textAlign: "center",
  },
});

export default SucessRegistrationModal;

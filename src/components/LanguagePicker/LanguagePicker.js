import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { SvgXml } from "react-native-svg";
import { selected } from "../../images/svg/selected-svg";

const LanguagePicker = ({ data, defaultValue }) => {
  const [selectedItem, setselectedItem] = useState(defaultValue);

  const handleLanguageSelect = (lang) => {
    setselectedItem(lang.name);
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleLanguageSelect(item)}>
        <View
          style={[
            styles.selectField,
            item.name === selectedItem && styles.selectFieldSelected,
          ]}
        >
          <SvgXml style={styles.flag} xml={item.svg} />
          <Text style={styles.selectText}>{item.name}</Text>
          {item.name === selectedItem && (
            <SvgXml style={styles.check} xml={selected} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        extraData={selectedItem}
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const { width: screenWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },

  container: {
    gap: 20,
    width: screenWidth,
  },
  selectField: {
    paddingLeft: 84,
    position: "relative",
    width: screenWidth - 40,
    justifyContent: "center",
    height: 60,
    borderWidth: 1,
    borderColor: "#EDEDED",
    borderRadius: 15,
  },
  selectFieldSelected: {
    borderColor: "#FFD57B",
  },
  selectText: {
    justifyContent: "center",
    color: "#650000",
    fontFamily: "Poppins-Light",
    fontSize: 14,
  },
  flag: {
    position: "absolute",
    left: 18,
    top: 17,
  },
  check: {
    position: "absolute",
    right: 28,
    top: 19,
  },
});

export default LanguagePicker;

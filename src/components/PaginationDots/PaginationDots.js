import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

const PaginationDots = ({ pageNumber, total }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(pageNumber);
  }, [pageNumber]);

  const renderDots = (total) => {
    let dots = [];
    for (let i = 0; i < total; i++) {
      dots.push(
        <View key={i} style={[styles.dot, active === i && styles.activeDot]} />
      );
    }
    return dots;
  };

  return <View style={styles.dotsWrapper}>{renderDots(total)}</View>;
};

const styles = StyleSheet.create({
  dotsWrapper: {
    flexDirection: "row",
    gap: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: "#EFEFEF",
  },
  activeDot: {
    backgroundColor: "#FFD57B",
    width: 16,
  },
});

export default PaginationDots;

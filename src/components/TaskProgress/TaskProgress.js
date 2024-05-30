import React from "react";
import { View, StyleSheet } from "react-native";

const TaskProgress = ({ completed, total }) => {
  const progress = completed / total;
  return (
    <View style={styles.progressBar}>
      <View style={[styles.progress, { flex: progress }]} />
      <View style={[styles.remaining, { flex: 1 - progress }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    flexDirection: "row",
    height: 3,
    width: 63,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    overflow: "hidden",
  },
  progress: {
    backgroundColor: "#68B900",
  },
  remaining: {
    backgroundColor: "#FFFFFF",
  },
});

export default TaskProgress;

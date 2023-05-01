import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { scale, verticalScale } from "utils/index";

interface Props {
  points: number;
  month: string;
}

export function Card({ month, points }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{month}</Text>
      <Text style={styles.points}>{points} pts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: verticalScale(8),
    backgroundColor: "#334FFA",
    height: verticalScale(120),
    width: "80%",
    borderRadius: scale(20),
    paddingHorizontal: scale(19),
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  date: {
    position: "absolute",
    left: scale(19),
    top: verticalScale(21),
    color: "white",
    fontSize: 16,
    fontWeight: "800",
    textTransform: "capitalize",
    fontFamily: "AvenirBold",
  },
  points: {
    color: "white",
    fontWeight: "bold",
    fontSize: scale(32),
    fontFamily: "AvenirBold",
  },
});

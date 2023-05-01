import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { scale, verticalScale } from "utils/index";

interface Props {
  name: string;
}

export function Header({ name }: Props) {
  return (
    <View>
      <Text style={styles.welcome}>Bienvenido de vuelta!</Text>
      <Text style={styles.userName}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: scale(16),
    fontWeight: "800",
    fontFamily: "AvenirBold",
  },
  userName: {
    fontSize: scale(14),
    fontFamily: "AvenirRegular",
    lineHeight: verticalScale(22),
  },
});

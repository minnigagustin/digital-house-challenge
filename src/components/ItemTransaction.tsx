import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image } from "expo-image";
import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { formatDate } from "utils/index";

export interface Props {
  date: Date;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
}

export function ItemTransaction({
  image,
  product,
  date,
  is_redemption,
  points,
}: Props) {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  const handlePress = () =>
    navigate("ProductDetails", {
      date,
      image,
      points,
      product,
    });

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <>
          <Image
            style={styles.image}
            source={{ uri: image }}
            priority={"high"}
          />
          <View style={styles.infoContainer}>
            <Text style={styles.product}>{product}</Text>
            <Text style={styles.date}>{formatDate(date)}</Text>
          </View>
        </>
        <>
          {is_redemption ? (
            <Text style={styles.min}>
              -<Text style={styles.points}>{`${points}  >`}</Text>
            </Text>
          ) : (
            <Text style={styles.sum}>
              +<Text style={styles.points}>{`${points}  >`}</Text>
            </Text>
          )}
        </>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: 55,
    height: 55,
    marginRight: 11,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
  },
  product: {
    fontSize: 14,
    fontWeight: "800",
    color: "#000",
    fontFamily: "AvenirBold",
  },
  date: {
    fontSize: 12,
    fontWeight: "400",
    marginTop: 7,
    color: "#000",
    fontFamily: "AvenirMedium",
  },
  min: {
    fontFamily: "AvenirBold",
    fontSize: 16,
    fontWeight: "800",
    color: "#FF0000",
  },
  sum: {
    fontFamily: "AvenirBold",
    fontSize: 16,
    fontWeight: "800",
    color: "#00B833",
  },
  points: {
    fontFamily: "AvenirBold",
    fontSize: 16,
    fontWeight: "800",
    color: "#000",
  },
});

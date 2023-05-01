import { useNavigation, useRoute } from "@react-navigation/native";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { formatDate, scale, verticalScale } from "utils/index";

function ProductDetails() {
  const { top } = useSafeAreaInsets();
  const route = useRoute();
  const navigate = useNavigation();

  //@ts-ignore
  const { product, image, date, points } = route.params;

  return (
    <>
      <StatusBar animated style="dark" backgroundColor={"#CFD6FF"} />
      <SafeAreaView
        style={[
          styles.customHeadContainer,
          {
            backgroundColor: "#CFD6FF",
          },
        ]}
      />
      <SafeAreaView style={[styles.container, { paddingTop: top }]}>
        <View style={styles.headerContainer}>
          <Text style={styles.productTitle}>{product}</Text>
        </View>
        <View style={{ marginHorizontal: scale(20) }}>
          <View style={styles.cardContainer}>
            <Image
              source={{ uri: image }}
              style={styles.productImage}
              contentFit="contain"
              priority={"high"}
            />
          </View>
          <Text
            style={{
              marginTop: 20,
              fontFamily: "AvenirBold",
              color: "#9B9898",
            }}
          >
            Detalles del producto:
          </Text>
          <Text style={styles.detailDate}>Comprado el: {formatDate(date)}</Text>
          <Text
            style={{
              marginTop: 20,
              fontFamily: "AvenirBold",
              color: "#9B9898",
            }}
          >
            Con esta compra acumulaste:
          </Text>

          <Text style={styles.detailsPoints}>{points} puntos</Text>

          <View style={styles.containerAll}>
            <TouchableOpacity
              onPress={() => navigate.goBack()}
              style={styles.buttonContainer}
            >
              <Text style={styles.textButton}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerAll: {
    height: verticalScale(70),
    width: "100%",
    alignItems: "center",
  },
  headerContainer: {
    backgroundColor: "#CFD6FF",
    height: verticalScale(70),
    paddingHorizontal: scale(20),
    justifyContent: "center",
  },
  productTitle: {
    fontFamily: "AvenirBold",
    fontSize: 24,
    lineHeight: verticalScale(26),
  },
  customHeadContainer: {
    flex: 0,
  },
  cardContainer: {
    backgroundColor: "white",
    width: "100%",
    height: verticalScale(280),
    marginVertical: verticalScale(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: verticalScale(10),
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 14,
  },
  productImage: {
    width: scale(200),
    height: scale(200),
  },
  detailDate: {
    fontFamily: "AvenirBold",
    fontSize: 16,
    lineHeight: verticalScale(20),
    marginVertical: verticalScale(6),
  },
  detailsPoints: {
    fontFamily: "AvenirBold",
    fontSize: 24,
    lineHeight: verticalScale(26),
    marginVertical: verticalScale(20),
  },
  buttonContainer: {
    backgroundColor: "#334FFA",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: verticalScale(50),
    borderRadius: verticalScale(10),
  },
  textButton: {
    color: "white",
    fontFamily: "AvenirBold",
    fontSize: scale(16),
  },
});

export default ProductDetails;

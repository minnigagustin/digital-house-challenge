import { Card } from "components/Card";
import { Header } from "components/Header";
import { ItemTransaction } from "components/ItemTransaction";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  ListRenderItemInfo,
} from "react-native";
import { moderateScale, scale, verticalScale } from "utils/index";
import { Axios } from "../configs/AxiosConfig";

export interface Props {
  createdAt: Date;
  product: string;
  points: number;
  image: string;
  is_redemption: boolean;
  id: string;
}

function Home() {
  const [data, setData] = useState([]);
  const [filtereddata, setFilteredData] = useState([]);
  const [filteredType, setFilteredType] = useState("all");

  const getData = async () => {
    const { data } = await Axios.get("/products");
    setData(data);
    setFilteredData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const calculatePoints = () => {
    const totalPoints = data.reduce((sum: any, item: any) => {
      return item.is_redemption ? sum - item.points : sum + item.points;
    }, 0);
    return totalPoints.toLocaleString();
  };

  const filter = (type: string) => {
    if (type === "accumulated") {
      setFilteredData(data.filter((item) => !item?.is_redemption));
      setFilteredType("accumulated");

      return;
    }

    if (type === "redeemed") {
      setFilteredData(data.filter((item) => item?.is_redemption));
      setFilteredType("redeemed");

      return;
    }

    setFilteredData(data);
    setFilteredType("all");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header name={"Ruben Rodriguez"} />
      <Text style={styles.text}>TUS PUNTOS</Text>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Card points={calculatePoints()} month={"Diciembre"} />
      </View>
      <Text style={styles.text}>TUS MOVIMIENTOS</Text>
      <View style={styles.transactionscontainer}>
        <FlatList
          data={filtereddata}
          renderItem={({ item }: ListRenderItemInfo<Props>) => (
            <ItemTransaction
              product={item.product}
              date={item.createdAt}
              points={item.points}
              image={item.image}
              is_redemption={item.is_redemption}
              id={item.id}
            />
          )}
          keyExtractor={(item) => item?.id}
        />
      </View>

      <View
        style={
          filteredType !== "all" ? styles.containerAll : styles.containerFilter
        }
      >
        {filteredType !== "all" ? (
          <TouchableOpacity
            onPress={() => filter("all")}
            style={[styles.buttonContainer, { width: "100%" }]}
          >
            <Text style={styles.textButton}>Todos</Text>
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              onPress={() => filter("accumulated")}
              style={[styles.buttonContainer, { width: "48%" }]}
            >
              <Text style={styles.textButton}>Ganados</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => filter("redeemed")}
              style={[styles.buttonContainer, { width: "48%" }]}
            >
              <Text style={styles.textButton}>Canjeados</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 20,
  },
  transactionscontainer: {
    backgroundColor: "white",
    borderRadius: moderateScale(20),
    width: "100%",
    height: moderateScale(350),
    marginTop: moderateScale(20),
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(23),
    marginBottom: verticalScale(18),
  },
  containerFilter: {
    height: verticalScale(70),
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerAll: {
    height: verticalScale(70),
    width: "100%",
    alignItems: "center",
  },
  text: { fontFamily: "AvenirBold", marginTop: 20, color: "#9B9898" },
  buttonContainer: {
    backgroundColor: "#334FFA",
    justifyContent: "center",
    alignItems: "center",
    height: verticalScale(50),
    borderRadius: verticalScale(10),
  },
  textButton: {
    color: "white",
    fontFamily: "AvenirBold",
    fontSize: scale(16),
  },
});

export default Home;

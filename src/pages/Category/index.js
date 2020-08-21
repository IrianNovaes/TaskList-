import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  FlatList,
  Alert,
} from "react-native";

// Styles
import styles from "./style";
import global from "../global";

//Components
import FooterMenu from "../../components/Footer";
import TopMenu from "../../components/TopMenu";

// Images
import bg from "../../assets/bg.png";

// Icons
import trash from "../../assets/trash.png";
import goBack from "../../assets/goBack.png";
import menu from "../../assets/menuTop.png";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [input, setInput] = useState();

  const navigation = useNavigation();
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch(
        "https://tasklist-bd7f.restdb.io/rest/category",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "Cache-control": "no-cache",
            "x-apikey": "c668b0b27d8088689f8fdbd792798c4d041fd",
          },
        }
      )
        .then((response) => response.json())
        .then((response) => {
          let cat = response.map((item) => {
            console.log(`Get Categories: ${JSON.stringify(item)}`);
            return item;
          });

          setCategories(cat);
        });
    } catch (e) {
      console.log(e);
    }
  }

  async function storeData() {
    try {
      await fetch("https://tasklist-bd7f.restdb.io/rest/category", {
        method: "POST",
        headers: {
          "cache-control": "no-cache",
          "x-apikey": "c668b0b27d8088689f8fdbd792798c4d041fd",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          value: input,
          label: input,
        }),
      });
    } catch (e) {
      console.log(e);
    } finally {
      setInput();
      Alert.alert("", "Your New Category Was Created.");
      getData();
    }
  }

  return (
    <View style={global.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor={"transparent"}
      />
      <ImageBackground source={bg} style={global.bg}>
        <View style={global.wrapper}>
          <View style={global.row}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image source={goBack} style={{ width: 20, height: 25 }} />
            </TouchableOpacity>
            <TopMenu />
          </View>

          <View style={global.titleWrapper}>
            <Text style={global.title}>Add a New Category</Text>
          </View>

          <TextInput
            style={[styles.input, { width: "100%" }]}
            placeholder={"Category"}
            onChangeText={(text) => setInput(text)}
            value={input}
          />
          <TouchableOpacity style={styles.submit} onPress={() => storeData()}>
            <Text style={styles.textSubmit}>Save</Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              color: "#fff",
              marginBottom: 10,
              alignSelf: "flex-start",
              marginTop: 20,
            }}
          >
            {" "}
            Current Categories:{" "}
          </Text>
          <FlatList
            data={categories}
            style={styles.categoriesList}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={global.row}>
                <Text style={{ fontSize: 20, color: "#fff", marginBottom: 10 }}>
                  {" "}
                  - {item.value}
                </Text>
              </View>
            )}
          ></FlatList>
        </View>
        <FooterMenu />
      </ImageBackground>
    </View>
  );
}

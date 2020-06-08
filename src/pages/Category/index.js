import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
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

  async function getData() {
    try {
      const jsonValue = await AsyncStorage.getItem("categories");
      jsonValue != null ? setCategories(JSON.parse(jsonValue)) : null;
    } catch (e) {
      // read error
    }
  }

  async function storeData(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);

      // read storage
      const currentStorage = await AsyncStorage.getItem("categories");
      console.log(`My current storage: \n  ${currentStorage}`);
    } catch (e) {
      Alert.alert("", "Something went really wrong, please try again.");
      navigation.navigate("Menu");
      // saving error
    } finally {
      Alert.alert("", "Your Category Was Created.");
      //navigation.navigate("Menu");
    }
  }
  useEffect(() => {
    getData();
  }, []);

  function addNewCategory() {
    setCategories([
      ...categories,
      {
        value: input,
      },
    ]);
    storeData("categories", categories);
    setInput();
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
          <TouchableOpacity
            style={styles.submit}
            onPress={() => addNewCategory()}
          >
            <Text style={styles.textSubmit}>Save</Text>
          </TouchableOpacity>
        </View>

        <FooterMenu />
      </ImageBackground>
    </View>
  );
}

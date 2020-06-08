import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import HideWithKeyboard from "react-native-hide-with-keyboard";

import styles from "./style";

//Icons
import seeTask from "../../assets/seeTask.png";
import addTask from "../../assets/addTask.png";
import menu from "../../assets/menu.png";

export default function Footer() {
  const navigation = useNavigation();

  function navigateToInput() {
    navigation.navigate("Input");
  }

  function navigateToList() {
    navigation.navigate("List");
  }

  function navigateToMenu() {
    navigation.navigate("Menu");
  }
  return (
    <View>
      <HideWithKeyboard>
        <View style={styles.footerMenu}>
          <LinearGradient
            colors={["rgba(255,255,255,0.6)", "transparent"]}
            style={styles.gradient}
          />

          <TouchableOpacity onPress={navigateToList} style={styles.button}>
            <Image source={seeTask} />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToMenu} style={styles.button}>
            <Image source={menu} />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToInput} style={styles.button}>
            <Image source={addTask} />
          </TouchableOpacity>
        </View>
      </HideWithKeyboard>
    </View>
  );
}

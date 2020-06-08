import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";

// Styles
import styles from "./style";
import global from "../global";

// Component
import FooterMenu from "../../components/Footer";
import TopMenu from "../../components/TopMenu";

// Images
import logo from "../../assets/logo.png";
import bg from "../../assets/bg.png";
// Icons (don't ask)
import menuTop from "../../assets/menuTop.png";
import plus from "../../assets/Plus.png";
import task from "../../assets/Task.png";

export default function Menu() {
  const navigation = useNavigation();

  function navigateToInput() {
    navigation.navigate("Input");
  }

  function navigateToList() {
    navigation.navigate("List");
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
          <TopMenu />

          <Image source={logo} style={styles.image} />

          <TouchableOpacity style={styles.submit} onPress={navigateToList}>
            <Text style={styles.textSubmit}> Check your Tasks </Text>
            <Image source={task} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.submit} onPress={navigateToInput}>
            <Text style={styles.textSubmit}> Add a new Task </Text>
            <Image source={plus} />
          </TouchableOpacity>
        </View>

        <FooterMenu />
      </ImageBackground>
    </View>
  );
}

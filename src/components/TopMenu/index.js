import React, { useState } from "react";
import { View, Image, Text, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

import styles from "./style";

//Icons
import menu from "../../assets/menuTop.png";
import goBack from "../../assets/goBack.png";

export default function TopMenu() {
  const navigation = useNavigation();
  const [render, setRender] = useState(false);

  function openMenu() {
    return (
      <View>
        <TouchableOpacity
          style={styles.menuContainer}
          onPress={() => setRender(!render)}
        />
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Menu");
            }}
            style={styles.item}
          >
            <Text style={styles.menuText}> Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Input");
            }}
            style={styles.item}
          >
            <Text style={styles.menuText}> Add Task</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("List");
            }}
            style={styles.item}
          >
            <Text style={styles.menuText}> Check List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate("Category");
            }}
          >
            <Text style={styles.menuText}> Categories</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate("Login", "Logout");
            }}
          >
            <Text style={styles.menuText}>LogOut</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => setRender(!render)}
        underlayColor={"transparent"}
        style={styles.menu}
      >
        {render ? <Image source={goBack} /> : <Image source={menu} />}
      </TouchableHighlight>
      {render && openMenu()}
    </View>
  );
}

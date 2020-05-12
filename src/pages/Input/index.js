import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";

import styles from "./style";

import logo from "../../assets/logo.png";

export default function Index() {
  const [myList, setMyList] = useState([]);
  const [task, setTask] = useState(task);

  const navigation = useNavigation();

  function addNewItem() {
    setMyList([
      ...myList,
      {
        id: myList.length + 1,
        value: task,
      },
    ]);
  }
  console.log("aaaaaaaaaaaaaaaaaa" + task);
  return (
    <View style={styles.container}>
      <Image source={logo} />

      <Text style={styles.title}>Title Here</Text>

      <TextInput
        style={styles.input}
        name={"input"}
        placeholder={" Enter here whatever "}
        defaultValue={task}
        OnChangeText={(task) => onChange(setTask(task))}
      />

      <TouchableOpacity style={styles.submit} onPress={() => addNewItem()}>
        <Text style={styles.textSubmit}>Submit</Text>
      </TouchableOpacity>

      <Text>This is my list:</Text>
      {myList.map((item) => (
        <Text>
          {" "}
          {item.id} : {item.value}{" "}
        </Text>
      ))}
    </View>
  );
}

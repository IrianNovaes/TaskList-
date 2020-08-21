import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text, Image, FlatList, TextInput } from "react-native";

import styles from "./style";

import arrow from "../../assets/goBack.png";

export default function Dropdown(props) {
  const [render, setRender] = useState(false);
  const [value, setValue] = useState(props.value);

  function saveValue(value) {
    props.onChange(value);
    setValue(value);
    setRender(false);
  }

  function openDropdown(dataArray) {
    return (
      <View style={[styles.list, props.styleList]}>
        {dataArray.map((data) => (
          <TouchableOpacity
            key={data._id}
            onPress={() => saveValue(data.value)}
            style={{ width: "100%" }}
          >
            <Text style={[styles.listItem, props.styleListItem]}>
              {data.value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }

  return (
    <View>
      <View style={[styles.container, props.styleContainer]}>
        <TextInput
          style={props.styleValue}
          placeholder={props.placeholder}
          editable={false}
          value={value}
        />

        <TouchableOpacity onPress={() => setRender(!render)}>
          {render ? (
            <Image
              source={arrow}
              style={{ transform: [{ rotate: "90deg" }] }}
              resizeMethod={"scale"}
              resizeMode={"center"}
            />
          ) : (
            <Image
              source={arrow}
              style={{ transform: [{ rotate: "-90deg" }] }}
              resizeMethod={"scale"}
              resizeMode={"center"}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {render && openDropdown(props.data)}
      </View>
    </View>
  );
}

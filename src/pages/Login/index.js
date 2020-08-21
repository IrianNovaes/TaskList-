import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";

import { handleLogon } from "../../services/api";

import styles from "./style";

import check from "../../assets/check.png";

export default function Index() {
  const navigation = useNavigation();
  const route = useRoute();

  const [userName, setUserName] = useState("");
  const [userPassword, setPassword] = useState("");
  const [display, setDisplay] = useState(false);
  const [remember, setRemember] = useState(false);

  const getRemember = async () => {
    let loginStored;

    try {
      loginStored = await AsyncStorage.getItem("RememberedLogin");
    } catch (e) {
      console.log(e);
    }

    if (loginStored != null) {
      loginStored = JSON.parse(loginStored);
      setRemember(true);
      setUserName(loginStored.user);
      setPassword(loginStored.password);
      handleLogin(loginStored.user, loginStored.password);
    } else {
      null;
    }
  };

  async function storeData(key, value) {
    try {
      const jsonData = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonData);
    } catch (e) {
      console.log(e);
    }
  }

  const handleLogin = async (name, password) => {
    setDisplay(true);
    const response = await handleLogon(name, password);

    if (response != null) {
      if (remember) {
        storeData("RememberedLogin", response);
      }
      storeData("Logged", response);
      navigation.navigate("Menu");
    }
    setDisplay(false);
  };

  const handleRemember = async () => {
    setDisplay(true);

    if (remember) {
      setRemember(!remember);
      try {
        await AsyncStorage.removeItem("RememberedLogin");
        await getData();
      } catch (e) {
        console.log(e);
      } finally {
        setUserName("");
        setPassword("");
      }
    } else {
      setRemember(!remember);
    }
    setDisplay(false);
  };

  useEffect(() => {
    const handleLogout = async () => {
      if (route.params === "Logout") {
        try {
          await AsyncStorage.removeItem("Logged");
        } catch (e) {
          console.log(e);
        }
      } else {
        await getRemember();
      }
    };
    handleLogout();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={"transparent"}
      />
      <Text style={styles.label}>Login </Text>
      <TextInput
        style={styles.input}
        autoCompleteType={"username"}
        onChangeText={(text) => {
          setUserName(text);
        }}
        placeholder={"Username"}
        value={userName}
      />
      <TextInput
        autoCompleteType={"password"}
        style={styles.input}
        onChangeText={(text) => {
          setPassword(text);
        }}
        placeholder={"Password"}
        secureTextEntry={true}
        value={userPassword}
      />
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          flexDirection: "row",
          width: "50%",
          alignSelf: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={() => handleRemember()}
          style={{
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: "#303030",
            marginRight: 5,
            marginTop: 10,
          }}
        >
          {remember ? (
            <Image
              source={check}
              resizeMethod={"scale"}
              resizeMode={"contain"}
              style={{
                width: 20,
                height: 20,
              }}
            />
          ) : null}
        </TouchableOpacity>
        <Text>Remember me</Text>
      </View>
      {display ? (
        <ActivityIndicator
          size="large"
          color="#ffffff"
          style={{
            position: "absolute",
            top: "50%",
          }}
        />
      ) : null}

      <TouchableOpacity
        onPress={() => {
          handleLogin(userName, userPassword);
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  StatusBar,
} from "react-native";

//services
import { getLoggedUser } from "../../services/api";

// Styles
import styles from "./style";
import global from "../global";

// Component
import FooterMenu from "../../components/Footer";
import TopMenu from "../../components/TopMenu";

// Images
import logo from "../../assets/logo.png";
import bg from "../../assets/bg.png";

// Icons
import plus from "../../assets/Plus.png";
import task from "../../assets/Task.png";

export default function Menu() {
  const [userName, setUserName] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    async function data() {
      const logged = await getLoggedUser();
      setUserName(logged.name);
    }
    data();
  }, []);

  return (
    <View style={global.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor={"transparent"}
      />
      <ImageBackground source={bg} style={global.bg}>
        <View style={global.wrapper}>
          <View style={{ justifyContent: "flex-end", width: "100%" }}>
            <Text style={{ color: "#fff" }}>Welcome {userName},</Text>
            <TopMenu />
          </View>

          <Image
            source={logo}
            style={[styles.image, { paddingVertical: 10, marginVertical: 10 }]}
            resizeMethod={"scale"}
            resizeMode={"center"}
          />

          <TouchableOpacity
            style={styles.submit}
            onPress={() => navigation.navigate("List")}
          >
            <Text style={styles.textSubmit}> Check your Tasks </Text>
            <Image source={task} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submit}
            onPress={() => navigation.navigate("Input")}
          >
            <Text style={styles.textSubmit}> Add a new Task </Text>
            <Image source={plus} />
          </TouchableOpacity>
        </View>

        <FooterMenu active={"menu"} />
      </ImageBackground>
    </View>
  );
}

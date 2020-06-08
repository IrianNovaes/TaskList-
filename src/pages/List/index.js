import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import { CheckBox } from "react-native-elements";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  FlatList,
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
import check from "../../assets/check.png";
import trash from "../../assets/trash.png";
import edit from "../../assets/edit.png";
import dots from "../../assets/dots.png";
import goBack from "../../assets/goBack.png";
import menu from "../../assets/menuTop.png";

export default function List() {
  const [myList, setMyList] = useState([]);
  const [task, setTask] = useState();
  const [checked, setChecked] = useState(false);

  const navigation = useNavigation();

  async function getData() {
    try {
      const jsonValue = await AsyncStorage.getItem("myTasks");
      jsonValue != null ? setMyList(JSON.parse(jsonValue)) : null;
    } catch (e) {
      // read error
    } finally {
      // read storage
      const currentStorage = await AsyncStorage.getItem("myTasks");
      console.log(`My current storage: \n  ${currentStorage}`);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const EmptyList = () => {
    return (
      <View>
        <Text style={[styles.title, { textAlign: "center" }]}>
          No Task Found
        </Text>
      </View>
    );
  };

  return (
    <View style={global.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor={"transparent"}
      />
      <ImageBackground source={bg} style={global.bg}>
        <View style={global.wrapper}>
          <View style={[global.row, { paddingRight: 20 }]}>
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
            <Text style={global.title}>Check Your Tasks</Text>
          </View>
          <FlatList
            data={myList}
            style={styles.list}
            keyExtractor={(item) => item.key.toString()}
            ListEmptyComponent={EmptyList}
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                <View style={global.row}>
                  <Text style={styles.title}>{item.name}</Text>
                  <TouchableOpacity>
                    <Image source={dots} />
                  </TouchableOpacity>
                </View>
                <View style={styles.box}>
                  <View style={styles.taskContainer}>
                    <FlatList
                      data={item.steps}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={({ item }) => (
                        <View
                          style={[
                            global.row,
                            {
                              margin: 5,
                              justifyContent: "flex-start",
                            },
                          ]}
                        >
                          <View style={styles.checkBox}>
                            <CheckBox
                              center
                              checkedIcon={<Image source={check} />}
                              uncheckedColor="transparent"
                              checkedColor="#000"
                              checked={checked}
                              onPress={() => setChecked(!checked)}
                            />
                          </View>
                          <Text style={styles.description}>{item.step}</Text>
                        </View>
                      )}
                    ></FlatList>
                  </View>

                  <View style={styles.buttons}>
                    {/* <TouchableOpacity style={styles.button}>
                      <Image source={edit} />
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.button}>
                      <Image source={trash} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          ></FlatList>
        </View>

        <FooterMenu />
      </ImageBackground>
    </View>
  );
}

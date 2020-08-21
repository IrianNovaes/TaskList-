import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native";

// Services
import { getTasks, getCategories, deleteTask } from "../../services/api";

// Styles
import styles from "./style";
import global from "../global";

//Components
import FooterMenu from "../../components/Footer";
import TopMenu from "../../components/TopMenu";
import Dropdown from "../../components/Dropdown";
import Checkbox from "../../components/Checkbox";

// Images
import bg from "../../assets/bg.png";

// Icons
import trash from "../../assets/trash.png";
import goBack from "../../assets/goBack.png";
import edit from "../../assets/edit.png";

export default function List() {
  const [myList, setMyList] = useState([]);
  const [display, setDisplay] = useState(false);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState();
  const [refresh, setRefresh] = useState(false);

  const navigation = useNavigation();

  async function data() {
    setRefresh(true);

    const task = await getTasks();
    setMyList(task);
    const cat = await getCategories();
    setCategories(cat);

    setRefresh(false);
  }
  useEffect(() => {
    const abortController = new AbortController();
    data();
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const Delete = async (value) => {
    setDisplay(true);
    await deleteTask(value);
    setDisplay(false);
  };

  const EmptyList = () => {
    return (
      <View>
        <Text style={[styles.description, { textAlign: "center" }]}>
          No Task Found
        </Text>
      </View>
    );
  };

  const HandleDropdown = (value) => {
    setFilter(value);
  };

  return (
    <View style={global.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor={"rgba(0, 0, 0, 0.1)"}
      />
      <ImageBackground source={bg} style={global.bg}>
        <View style={global.wrapper}>
          <View style={[global.row, { paddingRight: 20, overflow: "visible" }]}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={{ width: 30, height: 30 }}
            >
              <Image
                source={goBack}
                resizeMethod={"scale"}
                resizeMode={"contain"}
              />
            </TouchableOpacity>
            <TopMenu />
          </View>

          <View style={global.titleWrapper}>
            <Text style={global.title}>Check Your Tasks</Text>
          </View>
          {/* Filter */}
          <View
            style={{
              width: "100%",
              height: 35,
              justifyContent: "flex-end",
              alignItems: "flex-end",
              zIndex: 1,
            }}
          >
            <Dropdown
              data={categories}
              value={filter}
              onChange={HandleDropdown}
              styleValue={{ color: "#fff" }}
              styleList={styles.filterList}
              styleContainer={styles.filter}
              placeholder={"FILTER BY "}
            />
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

          <FlatList
            data={myList}
            style={styles.list}
            refreshing={refresh}
            keyExtractor={(item) => item._id}
            ListEmptyComponent={EmptyList}
            onRefresh={() => {
              data();
            }}
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                <View style={styles.cardHeader}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.status}>{item.status}</Text>
                  <Text style={styles.due}>{item.due}</Text>
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
                          <View>
                            <Checkbox
                              checkState={() => {}}
                              id={item.id.toString()}
                            />
                          </View>
                          <Text style={styles.description}>{item.step}</Text>
                        </View>
                      )}
                    ></FlatList>
                  </View>

                  <View style={styles.buttons}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => navigation.navigate("Input", item)}
                    >
                      <Image source={edit} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        Delete(item._id);
                      }}
                    >
                      <Image source={trash} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          ></FlatList>
        </View>

        <FooterMenu active={"list"} />
      </ImageBackground>
    </View>
  );
}

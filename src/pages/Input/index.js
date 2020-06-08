import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from "react-native-material-dropdown";
import { CheckBox } from "react-native-elements";
import {
  Text,
  View,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  FlatList,
  KeyboardAvoidingView,
} from "react-native";

// Styles
import styles from "./style";
import global from "../global";

//Components
import FooterMenu from "../../components/Footer";
import TopMenu from "../../components/TopMenu";

// Images
import bg from "../../assets/bg.png";
import check from "../../assets/check.png";
import plus from "../../assets/Plus.png";
import goBack from "../../assets/goBack.png";
import menu from "../../assets/menuTop.png";

export default function Index() {
  //
  const [taskName, setTaskName] = useState();
  const [taskStatus, setTaskStatus] = useState();
  const [taskCategory, setTaskCategory] = useState();
  const [taskDueDate, setTaskDueDate] = useState();
  const [checked, setChecked] = useState(false); // checkBox needs improvements
  const [myList, setMyList] = useState([]); // Final List
  const [indexStep, setIndexStep] = useState([1]); // Input Add
  const [taskSteps, setTaskSteps] = useState([
    { id: 1, checked: false, step: "" },
  ]);

  const [update, setUpdate] = useState(false);

  const navigation = useNavigation();

  //storage config

  const categoriesArray = [
    {
      value: "Studies",
    },
    {
      value: "Household",
    },
    {
      value: "Work",
    },
  ];

  async function getData() {
    try {
      const jsonValue = await AsyncStorage.getItem("myTasks");
      jsonValue != null ? setMyList(JSON.parse(jsonValue)) : null;
    } catch (e) {
      // read error
    }
  }

  async function storeData(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      Alert.alert("", "Something went really wrong, please try again.");
      navigation.navigate("Menu");
      // saving error
    } finally {
      // read storage
      const currentStorage = await AsyncStorage.getItem("myTasks");
      console.log(`My current storage: \n  ${currentStorage}`);
      Alert.alert("", "Your Task Was Created.");
      //navigation.navigate("Menu");
    }
  }
  useEffect(() => {
    getData();
  }, []);

  ////////// Adds Everything into an Array of objects
  function addNewItem() {
    setMyList([
      ...myList,
      {
        key: new Date().valueOf(),
        name: taskName,
        status: taskStatus,
        category: taskCategory,
        due: taskDueDate,
        steps: taskSteps,
      },
    ]);
    storeData("myTasks", myList);
  }

  /////////// Add a new input and checkbox on the steps section 'unrelated'(Using the value as an Id, you can improve this later might conflict when deleting) to the TaskSteps State
  function updateIndex() {
    let myInput = indexStep.length + 1;
    setIndexStep((prev) => [...prev, myInput]);
  }

  ////////// Automatically saves all the steps added into an array to be later pushed into the full list
  function addNewStep(value, id) {
    const update = taskSteps.some((e) => {
      return e.id == id;
    });
    let updatedList = [];

    if (update) {
      updatedList = taskSteps.map((item) => {
        if (item.id === id && typeof value === "boolean") {
          return { ...item, checked: value };
        } else if (item.id === id && typeof value === "string") {
          return { ...item, step: value };
        } else {
          return item;
        }
      });
    } else if (typeof value === "string") {
      // Don't want to create a task only with the checked info, default value should be false
      updatedList = taskSteps.map((item) => {
        return item;
      });
      updatedList.push({ id: id, checked: false, step: value });
    } else {
      Alert.alert("", "Enter a Task First.");
    }
    updatedList.length > 0 ? setTaskSteps(updatedList) : {};
  }

  //console.info(`My Steps: ${JSON.stringify(myList)}`);
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
            <HideWithKeyboard>
              <Text style={global.title}>Add a New Task</Text>
            </HideWithKeyboard>
          </View>

          <KeyboardAvoidingView style={styles.form} behavior={"padding"}>
            {/* Task Name Label */}
            <Text style={styles.label}>Task Name</Text>
            {/* Task Name Input */}
            <TextInput
              style={[styles.input, { width: "100%" }]}
              placeholder={"Clean the house"}
              onChangeText={(text) => setTaskName(text)}
              value={taskName}
            />
            {/* Step Label */}
            <View style={[global.row, { marginBottom: 5 }]}>
              <Text style={styles.label}>Steps</Text>
              <TouchableOpacity onPress={() => updateIndex()}>
                <Image
                  source={plus}
                  style={{ width: 20, height: 20, marginRight: 5 }}
                />
              </TouchableOpacity>
            </View>

            {/* Steps Section FlatList Missing Functionality  */}
            <FlatList
              data={indexStep}
              style={styles.steps}
              keyExtractor={(item) => item.toString()}
              renderItem={({ item }) => (
                <View style={global.row}>
                  <TouchableOpacity
                    style={styles.checkBox}
                    onPress={() => addNewStep(checked, item)}
                  >
                    <CheckBox
                      center
                      checkedIcon={<Image source={check} />}
                      uncheckedColor="transparent"
                      checkedColor="#000"
                      checked={checked}
                      onPress={() => {}}
                    />
                  </TouchableOpacity>
                  <TextInput
                    style={[styles.input, { width: "80%" }]}
                    placeholder={"Enter your task"}
                    onChangeText={(text) => addNewStep(text, item)}
                  />
                </View>
              )}
            ></FlatList>

            {/* Task Status Label */}
            <Text style={[styles.label, { marginTop: 10 }]}>Status</Text>
            {/* Task Status Input */}
            <TextInput
              style={[styles.input, { width: "100%" }]}
              placeholder={"Pending"}
              onChangeText={(text) => setTaskStatus(text)}
              value={taskStatus}
            />
            {/* Task Status Label */}
            <Text style={styles.label}>Category</Text>
            {/* Task Status Input */}
            <View style={[styles.dropdown, { width: "100%" }]}>
              <Dropdown
                data={categoriesArray}
                dropdownOffset={{ top: 0, left: 0 }}
                onChangeText={(text) => setTaskCategory(text)}
                value={taskCategory}
              />
            </View>
            {/* Task Status Label */}
            <Text style={styles.label}>Due Date</Text>
            {/* Task Status Input */}
            <TextInput
              style={[styles.input, { width: "100%" }]}
              placeholder={"Today"}
              onChangeText={(text) => setTaskDueDate(text)}
              value={taskDueDate}
            />
          </KeyboardAvoidingView>
          <TouchableOpacity style={styles.submit} onPress={() => addNewItem()}>
            <Text style={styles.textSubmit}>Save</Text>
          </TouchableOpacity>
        </View>
        <FooterMenu />
      </ImageBackground>
    </View>
  );
}

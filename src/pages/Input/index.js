import React, { useState, useEffect } from "react";
import HideWithKeyboard from "react-native-hide-with-keyboard";
import { useNavigation, useRoute } from "@react-navigation/native";
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
  ActivityIndicator,
  ScrollView,
} from "react-native";

//services
import { getCategories, storeTask, getLoggedUser } from "../../services/api";

// Styles
import styles from "./style";
import global from "../global";

//Components
import Dropdown from "../../components/Dropdown";
import FooterMenu from "../../components/Footer";
import TopMenu from "../../components/TopMenu";
import Steps from "../../components/Steps";

// Images
import bg from "../../assets/bg.png";
import goBack from "../../assets/goBack.png";

export default function Index() {
  const navigation = useNavigation();
  const route = useRoute();

  const [display, setDisplay] = useState(false);
  const [edit, setEdit] = useState(false);

  const [taskName, setTaskName] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDueDate, setTaskDueDate] = useState("");
  const [user, setUser] = useState("");
  const [taskSteps, setTaskSteps] = useState();
  const [categories, setCategories] = useState([]);

  const task = JSON.stringify({
    name: taskName,
    status: taskStatus,
    category: taskCategory,
    due: taskDueDate,
    user: user,
    steps: taskSteps,
  });

  const status = [
    { _id: "1", value: "Pending" },
    { _id: "2", value: "Started" },
    { _id: "3", value: "Finalized" },
    { _id: "4", value: "Abandoned" },
  ];

  async function getData() {
    setDisplay(true);

    const cat = await getCategories();
    setCategories(cat);
    const logged = await getLoggedUser();
    setUser(logged._id);

    setDisplay(false);
  }

  async function saveTask() {
    setDisplay(true);
    await storeTask(task);
    setDisplay(false);
    navigation.navigate("Menu");
  }

  useEffect(() => {
    if (!route.params) {
      getData();
    } else {
      setTaskName(route.params.name);
      setTaskCategory(route.params.category);
      setTaskDueDate(route.params.due);
      setTaskStatus(route.params.status);
      setTaskSteps(route.params.steps);
    }
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const HandleDropdownCategory = (value) => {
    setTaskCategory(value);
  };
  const HandleDropdownStatus = (value) => {
    setTaskStatus(value);
  };

  const HandleSteps = (value) => {
    setTaskSteps(value);
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
            <HideWithKeyboard>
              <Text style={global.title}>Add a New Task</Text>
            </HideWithKeyboard>
          </View>
          <ScrollView
            nestedScrollEnabled={true}
            style={{
              width: "100%",
              height: "100%",
              marginBottom: 10,
            }}
          >
            <View style={[styles.form, { paddingBottom: 35, marginTop: 10 }]}>
              {/* Task Name Label */}
              <Text style={styles.label}>Task Name</Text>
              {/* Task Name Input */}
              <TextInput
                style={[styles.input, { width: "100%" }]}
                placeholder={"Clean the house"}
                onChangeText={(text) => setTaskName(text)}
                value={taskName}
              />
              {display ? (
                <ActivityIndicator
                  size="large"
                  color="#ffffff"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "45%",
                  }}
                />
              ) : null}
              {/* Step Label */}

              <Steps
                onChange={() => {
                  HandleSteps;
                }}
                data={taskSteps}
              />

              {/* Task Status Label */}
              <Text style={styles.label}>Category</Text>
              {/* Task Status Input */}
              <View style={{ width: "100%" }}>
                <Dropdown
                  data={categories}
                  value={taskCategory}
                  onChange={HandleDropdownCategory}
                  placeholder={"Category"}
                  styleValue={{ color: "#fff" }}
                  styleContainer={styles.input}
                  styleList={{
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20,
                  }}
                />
              </View>

              {/* Task Status Label */}
              <Text style={styles.label}>Status</Text>
              {/* Task Status Input */}

              <Dropdown
                data={status}
                value={taskStatus}
                onChange={HandleDropdownStatus}
                placeholder={"Status"}
                styleValue={{ color: "#fff" }}
                styleContainer={styles.input}
                styleList={{
                  borderTopRightRadius: 20,
                  borderTopLeftRadius: 20,
                }}
              />

              {/* Task Status Label */}
              <Text style={styles.label}>Due Date</Text>
              {/* Task Status Input */}
              <TextInput
                style={[styles.input, { width: "100%" }]}
                placeholder={"Due Date"}
                onChangeText={(text) => setTaskDueDate(text)}
                value={taskDueDate}
              />

              <View style={{ height: 100, width: "100%" }} />
            </View>
          </ScrollView>
          <HideWithKeyboard style={{ width: "100%", alignItems: "center" }}>
            <TouchableOpacity style={styles.submit} onPress={() => saveTask()}>
              <Text style={styles.textSubmit}>Save</Text>
            </TouchableOpacity>
          </HideWithKeyboard>
        </View>

        <FooterMenu active={"input"} />
      </ImageBackground>
    </View>
  );
}

import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

// Styles
import styles from "./style";

//Components
import Checkbox from "../../components/Checkbox";

// Images
import plus from "../../assets/Plus.png";

export default function Steps(props) {
  console.log(props.data);
  const [taskSteps, setTaskSteps] = useState(
    () => props.data || [{ id: 1, step: "", checked: false }]
  );
  const [indexStep, setIndexStep] = useState(taskSteps.length); // Steps Input Add

  let printInput = [];

  function renderInputs() {
    let i = 0;
    let defaultValue;

    if (indexStep == taskSteps.length) {
      defaultValue = taskSteps[i].step;
    } else {
      defaultValue = null;
    }

    do {
      i++;

      printInput.push(
        <View style={styles.row} key={i}>
          <Checkbox checkState={addNewStep} id={i} />

          <TextInput
            style={[styles.input, { width: "85%" }]}
            placeholder={"Enter your task"}
            onChangeText={(text) => addNewStep(text, i.toString())}
            value={defaultValue}
          />
        </View>
      );
    } while (i < indexStep);
  }

  useEffect(() => {
    setTaskSteps(props.data);
    renderInputs();
  }, [props.data]);

  console.log(taskSteps);

  function addNewStep(value, id) {
    const update = taskSteps.some((e) => {
      return e.id == id;
    });
    let updatedList = [];

    if (update) {
      updatedList = taskSteps.map((item) => {
        if (item.id === id && typeof value === "string") {
          return { ...item, step: value };
        } else {
          return item;
        }
      });
    } else if (typeof value === "string") {
      updatedList = taskSteps.map((item) => {
        return item;
      });
      updatedList.push({ id: id, checked: false, step: value });
    } else {
      Alert.alert("", "Don't forget to enter your task.");
    }
    if (updatedList.length > 0) {
      setTaskSteps(updatedList);
      props.onChange(updatedList);
    }
  }

  //console.info(`My Steps: ${JSON.stringify(myList)}`);

  return (
    <View style={styles.container}>
      {/* Step Label */}
      <View style={[styles.row, { marginBottom: 5 }]}>
        <Text style={styles.label}>Steps</Text>
        <TouchableOpacity onPress={() => setIndexStep(indexStep + 1)}>
          <Image
            source={plus}
            style={{ width: 20, height: 20, marginRight: 5 }}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.steps}>{printInput}</View>
    </View>
  );
}

import React, { useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";

import styles from "./style";

//Icons
import check from "../../assets/check.png";

export default function Checkbox(props) {
  const [checked, setChecked] = useState(false);
  const [id] = useState(props.id);

  const checkboxHandler = (value, id) => {
    setChecked(!checked);
    props.checkState(value, id);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => checkboxHandler(checked, id)}
        style={styles.box}
      >
        {checked ? (
          <Image source={check} resizeMethod={"scale"} resizeMode={"contain"} />
        ) : null}
      </TouchableOpacity>
    </View>
  );
}

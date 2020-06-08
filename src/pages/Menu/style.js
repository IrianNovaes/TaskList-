import { StyleSheet } from "react-native";

export default StyleSheet.create({
  image: {
    alignSelf: "center",
    resizeMode: "contain",
    width: 320,
  },

  submit: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",

    backgroundColor: "rgba(255, 255, 255, 0.3)",

    width: 300,
    height: 55,

    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",

    paddingHorizontal: 15,
    marginBottom: 10,
  },

  textSubmit: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

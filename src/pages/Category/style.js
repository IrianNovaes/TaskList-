import { StyleSheet } from "react-native";

export default StyleSheet.create({
  input: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",

    backgroundColor: "rgba(255, 255, 255, 0.3)",

    height: 35,

    marginBottom: 20,

    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 20,
  },
  categoriesList: {
    maxHeight: "40%",
    alignSelf: "flex-start",
    marginLeft: 15,
  },
  submit: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",

    backgroundColor: "rgba(255, 255, 255, 0.3)",

    width: "90%",
    height: 55,

    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  textSubmit: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  form: {
    width: "100%",
    justifyContent: "center",
  },
  label: {
    fontSize: 15,
    color: "#fff",
  },
  dropdown: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",

    backgroundColor: "rgba(255, 255, 255, 0.3)",
    paddingHorizontal: 16,
    height: 35,
  },
  input: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",

    backgroundColor: "rgba(255, 255, 255, 0.3)",

    height: 35,

    marginBottom: 5,

    alignItems: "center",
    paddingHorizontal: 10,
  },
  steps: {
    minHeight: "10%",
    maxHeight: "25%",
  },

  checkBox: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",

    backgroundColor: "rgba(255, 255, 255, 0.3)",

    width: 40,
    height: 35,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    alignItems: "flex-start",
  },

  submit: {
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",

    backgroundColor: "rgba(255, 255, 255, 0.3)",

    width: "90%",
    height: 55,
    position: "absolute",
    top: 500,

    alignItems: "center",
    justifyContent: "center",
  },

  textSubmit: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

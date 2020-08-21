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

    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.3)",

    height: 35,

    marginBottom: 5,

    alignItems: "center",
    paddingHorizontal: 10,
  },
  camera: {
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "#fff",
    paddingHorizontal: 5,
    height: 35,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    marginBottom: 5,
  },
  steps: {
    minHeight: "15%",
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
  },

  textSubmit: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});

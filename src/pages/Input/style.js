import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 25,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  goBack: {
    alignSelf: "flex-start",
  },
  title: {
    fontSize: 25,
    color: "#123",
    fontWeight: "bold",
  },

  input: {
    borderRadius: 6,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    height: 40,
    marginTop: 10,
    marginBottom: 20,
    width: "100%",
    alignItems: "center",
  },

  submit: {
    borderRadius: 6,
    borderWidth: 0.5,
    backgroundColor: "#123",
    width: "50%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  textSubmit: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

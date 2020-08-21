import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  label: {
    fontSize: 30,
    fontWeight: "500",
    marginBottom: 30,
    textTransform: "uppercase",
  },
  input: {
    borderBottomWidth: 2,
    width: "100%",
    height: 40,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 30,
    borderWidth: 1,
    width: "70%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    fontSize: 20,
  },
});

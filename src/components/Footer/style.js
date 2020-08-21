import { StyleSheet } from "react-native";

export default StyleSheet.create({
  footerMenu: {
    marginTop: 10,
    height: 60,

    borderTopColor: "#fff",
    borderTopWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  gradient: {
    position: "absolute",
    height: 60,
    left: 0,
    right: 0,
    top: 0,
  },
  button: {
    opacity: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    borderBottomWidth: 5,
    borderColor: "#000",
    width: 100,
    bottom: 3,
    position: "absolute",

    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
});

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 10,
    width: "100%",
    zIndex: 5,
  },
  menu: {
    alignSelf: "flex-end",
    zIndex: 100,
  },

  menuContainer: {
    position: "absolute",
    right: -20,
    top: -50,
    zIndex: 8,

    width: "50%",
    height: 700,

    paddingTop: 80,
    paddingBottom: 130,

    backgroundColor: "rgba(255,255,255,0.7)",
  },
  wrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
  item: {
    backgroundColor: "rgba(0,0,0,0.1)",
    width: 160,
    minHeight: 30,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 5,
    zIndex: 20,
  },
  menuText: {
    fontSize: 30,
    color: "#fff",
    textAlign: "right",
  },
});

import { StyleSheet, Dimensions } from "react-native";

const width = Math.round(Dimensions.get("window").width);
const height = Math.round(Dimensions.get("window").height);

export default StyleSheet.create({
  container: {
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 10,
  },
  menu: {
    alignSelf: "flex-end",
    zIndex: 100,
  },

  menuContainer: {
    backgroundColor: "rgba(0,0,0,0.6)",
    width: width,
    height: height,
    zIndex: 98,

    bottom: 0,
    top: -65,
    right: -20,
  },
  wrapper: {
    backgroundColor: "rgba(220,220,220,0.97)",
    justifyContent: "space-around",
    alignItems: "flex-end",

    position: "absolute",
    zIndex: 99,
    top: -40,
    right: -20,

    height: "100%",
    width: "50%",
    paddingBottom: 70,
    paddingTop: 30,
  },
  item: {
    backgroundColor: "rgba(0,0,0,0.1)",
    minHeight: 30,
    width: width / 2,

    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 20,
  },
  menuText: {
    fontSize: 30,
    color: "#fff",
    textAlign: "right",
  },
});

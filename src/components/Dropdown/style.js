import { StyleSheet, Dimensions } from "react-native";

const width = Math.round(Dimensions.get("window").width);
const height = Math.round(Dimensions.get("window").height);
export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    zIndex: 1,
  },

  listContainer: {
    position: "absolute",
    right: 0,
    top: 35,
    zIndex: 10,
    width: "100%",
  },

  wrapper: {
    justifyContent: "space-around",
    width: "100%",
    zIndex: 10,
    top: 0,
    right: 0,
  },

  list: {
    zIndex: 10,
    backgroundColor: "rgba(240,240,240,0.95)",
    paddingVertical: 15,

    justifyContent: "space-between",
    width: "100%",
    minHeight: 100,

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  listItem: {
    marginVertical: 5,
    paddingVertical: 5,
    paddingLeft: 10,
    color: "#fff",
    fontWeight: "500",
    fontSize: 15,

    backgroundColor: "rgba(0,0,0,0.2)",
  },
});

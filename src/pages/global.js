import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#303030",
  },

  bg: {
    width: "100%",
    height: "105%",
    position: "absolute",
    zIndex: -2,
  },
  wrapper: {
    flex: 0.95,
    marginHorizontal: 20,
    justifyContent: "flex-start",
    alignItems: "center",

    marginTop: 20,
    paddingTop: 15,
  },
  titleWrapper: {
    width: "100%",
  },
  title: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    margin: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
});

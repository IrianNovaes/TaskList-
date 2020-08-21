import { StyleSheet, Dimensions } from "react-native";

const width = Math.round(Dimensions.get("window").width);
const height = Math.round(Dimensions.get("window").height);

export default StyleSheet.create({
  list: {
    width: width,
    marginBottom: -10,
    backgroundColor: "rgba(0,0,0,0.2)",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  filterList: {
    width: width,
    borderRadius: 0,
    left: -20,
  },

  filter: {
    width: width,
    right: -20,
    zIndex: 10,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,0.6)",
  },

  cardContainer: {
    minHeight: 150,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",

    backgroundColor: "rgba(200,200,200,0.6)",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 15,
  },
  cardHeader: {
    width: "100%",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#fff",
    textTransform: "capitalize",
    letterSpacing: 2,
  },
  status: {
    fontSize: 10,
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: 5,
    top: -6,
    marginLeft: 10,
  },
  due: {
    fontSize: 15,
    color: "#fff",
    alignSelf: "flex-end",
    marginRight: 10,
  },

  box: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
    minHeight: 100,
    paddingTop: 10,
  },

  taskContainer: {
    maxWidth: "60%",
    height: "100%",
    marginLeft: 15,
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
  description: {
    fontSize: 17,
    textAlign: "left",
    color: "#fff",

    maxWidth: "100%",
    marginLeft: 5,
  },
  buttons: {
    alignSelf: "flex-end",
  },
  button: {
    marginBottom: 10,
  },
});

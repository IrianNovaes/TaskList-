import { StyleSheet } from "react-native";

export default StyleSheet.create({
  list: {
    width: "100%",
    marginBottom: -10,
  },

  cardContainer: {
    minHeight: 150,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",

    backgroundColor: "rgba(255,255,255,0.6)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",

    padding: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 25,
    color: "#fff",
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

import { Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const abortController = new AbortController();
const signal = abortController.signal;

export async function getLoggedUser() {
  let loginStored;

  try {
    loginStored = await AsyncStorage.getItem("Logged");
  } catch (e) {
    console.log(e);
  }

  if (loginStored != null) {
    loginStored = JSON.parse(loginStored);
    return {
      _id: loginStored._id,
      user: loginStored.user,
      name: loginStored.name,
    };
  } else {
    return null;
  }
}

export async function storeTask(body) {
  if (body != null) {
    try {
      await fetch("https://tasklist-bd7f.restdb.io/rest/task", {
        signal: signal,
        method: "POST",
        headers: {
          "cache-control": "no-cache",
          "x-apikey": "c668b0b27d8088689f8fdbd792798c4d041fd",
          "content-type": "application/json",
        },
        body: body,
      });
    } catch (e) {
      console.log(e);
    } finally {
      Alert.alert("", "Your Task Was Created.");
    }
  } else {
    Alert.alert("", "Sorry, you can't create an empty task.");
  }
}

export async function getTasks(filter) {
  let loggedUser = await getLoggedUser();
  let tasks = [];

  try {
    const response = await fetch("https://tasklist-bd7f.restdb.io/rest/task", {
      signal: signal,
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "Cache-control": "no-cache",
        "x-apikey": "c668b0b27d8088689f8fdbd792798c4d041fd",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (loggedUser._id) {
          tasks = response.filter((task) => {
            return task.user === loggedUser._id;
          });
        }
        // if (filter) {
        //   tasks = response.filter((task) => {
        //     return task.category === filter;
        //   });
        // } else {
        //   tasks = response.map((task) => {
        //     return task;
        //   });
        // }
      });
  } catch (e) {
    console.log(e);
  }
  return tasks;
}

export async function getCategories() {
  let cat = [];
  try {
    const response = await fetch(
      "https://tasklist-bd7f.restdb.io/rest/category",
      {
        signal: signal,
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Cache-control": "no-cache",
          "x-apikey": "c668b0b27d8088689f8fdbd792798c4d041fd",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        cat = response.map((item) => {
          //console.log(`Get Categories: ${JSON.stringify(item)}`);
          return item;
        });
      });
  } catch (e) {
    console.log(e);
  }
  return cat;
}

export async function handleLogon(user, password) {
  let login;
  try {
    const response = await fetch("https://tasklist-bd7f.restdb.io/rest/login", {
      signal: signal,
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "Cache-control": "no-cache",
        "x-apikey": "c668b0b27d8088689f8fdbd792798c4d041fd",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        login = response.filter((item) => {
          return item.user === user;
        });
      });
  } catch (e) {
    console.log(e);
  } finally {
    if (login[0] != null) {
      if (login[0].password == password) {
        return login[0];
      } else {
        Alert.alert("", `Please verify your Password`);
      }
    } else {
      Alert.alert("", `Please verify your Username`);
    }
  }
}

export async function deleteTask(id) {
  try {
    fetch(`https://tasklist-bd7f.restdb.io/rest/task/${id}`, {
      signal: signal,
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Cache-control": "no-cache",
        "x-apikey": "c668b0b27d8088689f8fdbd792798c4d041fd",
      },
    });
  } catch (e) {
    console.log(e);
  } finally {
    await getTasks();
    Alert.alert("", `Task: ${id} was erased`);
  }
}

export async function deleteCategory(id) {
  try {
    fetch(`https://tasklist-bd7f.restdb.io/rest/category/${id}`, {
      signal: signal,
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Cache-control": "no-cache",
        "x-apikey": "c668b0b27d8088689f8fdbd792798c4d041fd",
      },
    });
  } catch (e) {
    console.log(e);
  } finally {
    await getCategories();
    Alert.alert("", `Category: ${id} was erased`);
  }
}

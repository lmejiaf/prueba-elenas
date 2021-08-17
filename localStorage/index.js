import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log("No se pudo guardar el valor: ", e);
    throw e;
  }
};
export const storeObject = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log("No se pudo guardar el objeto: ", e);
  }
};
export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
      .then((res) => res)
      .catch((err) => err);
    return value;
  } catch (e) {
    console.log("No se pudo obtener el valor: ", e);
  }
};
export const getObject = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
      .then((res) => res)
      .catch((err) => err);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log("No se pudo obtener el objeto: ", e);
  }
};
export const getToken = async () => {
  let dataToken = await getData("token")
    .then((res) => res)
    .catch((err) => err);
  return dataToken;
};

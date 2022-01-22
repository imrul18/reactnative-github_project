import * as actionTypes from "./actionTypes";
import axios from "axios";

export const setAuth = (data) => {
  return {
    type: actionTypes.SET_AUTH,
    payload: data,
  };
};

export const loadAllData = (data) => {
  return {
    type: actionTypes.LOAD_ALL_DATA,
    payload: data,
  };
};

export const getAllData = () => (dispatch) => {
  axios
    .get("https://api.github.com/users")
    .then((res) => dispatch(loadAllData(res.data)))
    .catch((err) => console.log(err));
};

export const loadFavouriteData = (data) => {
  return {
    type: actionTypes.LOAD_FAVOURITE_DATA,
    payload: data,
  };
};

export const getFavouriteData = (Auth) => (dispatch) => {
  axios
    .get(
      "https://githubproject-8da9b-default-rtdb.firebaseio.com/" +
        Auth +
        "/favourite.json"
    )
    .then((res) => {
      const carry = [];
      for (let key in res.data) {
        carry.unshift({
          ...res.data[key],
          id: key,
        });
      }
      dispatch(loadFavouriteData(carry));
    })
    .catch((err) => console.log(err));
};

export const loadTargetData = (data) => {
  return {
    type: actionTypes.LOAD_TARGET_DATA,
    payload: data,
  };
};

export const getTargetData = (username) => (dispatch) => {
  axios
    .get("https://api.github.com/users/" + username)
    .then((res) => dispatch(loadTargetData(res.data)))
    .catch((err) => console.log(err));
};

export const addFavourite = (username, loginAuth) => (dispatch) => {
  axios
    .get("https://api.github.com/users/" + username)
    .then((res) =>
      axios.post(
        "https://githubproject-8da9b-default-rtdb.firebaseio.com/" +
          loginAuth +
          "/favourite.json",
        res.data
      )
    )
    .catch((err) => console.log(err));
};

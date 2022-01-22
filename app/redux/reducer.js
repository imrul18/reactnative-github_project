import * as actionType from "./actionTypes";

const INITIAL_STATE = {
  loginAuth: "",
  allUsers: [],
  favouriteUsers: [],
  targetUser: [],
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.LOAD_ALL_DATA:
      return {
        ...state,
        allUsers: action.payload,
      };
    case actionType.LOAD_TARGET_DATA:
      return {
        ...state,
        targetUser: action.payload,
      };

    case actionType.LOAD_FAVOURITE_DATA:
      return {
        ...state,
        favouriteUsers: action.payload,
      };
    case actionType.SET_AUTH:
      return {
        ...state,
        loginAuth: action.payload,
      };
    default:
      return state;
  }
};

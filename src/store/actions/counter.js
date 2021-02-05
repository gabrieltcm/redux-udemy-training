import * as actionTypes from "./actionTypes";

//An Action Creator for Asynchronous code
export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};
//An Action Creator for Asynchronous code
export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

//An Action Creator for Asynchronous code
export const add = (value) => {
  return {
    type: actionTypes.ADD,
    val: value,
  };
};

//An Action Creator for Asynchronous code
export const subtract = (value) => {
  return {
    type: actionTypes.SUBTRACT,
    val: value,
  };
};

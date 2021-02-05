import * as actionTypes from "./actionTypes";

export const saveResult = (res) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: res,
  };
};

//An Action Creator for Asynchronous code
export const storeResult = (res) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      //   const oldCounter = getState().ctr.counter;
      //   console.log(oldCounter);
      dispatch(saveResult(res));
    }, 2000);
  };
};

//An Action Creator for Asynchronous code
export const deleteResult = (resElId) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: resElId,
  };
};

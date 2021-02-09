// This Function class is a cleanup for all your reducers,
// Is optional, is just to make your reducer more leaner
// So in reducer basically we update the state immutably, we take the old state and we give back an updated object.
// So this Utility is just to take the old state and pass back a updatedObject, is really optional BTW. Just a cleanup
export const updateObject = (oldObject, updatedValues) => {
  return {
    ...oldObject,
    ...updatedValues,
  };
};

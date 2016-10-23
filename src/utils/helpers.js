import { errorDialog } from "./dialog";
export function createReducer (initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];

    return reducer
      ? reducer(state, action.payload)
      : state;
  };
}


export const handleApiError = (data) => {
  if (data.error == true) {
    errorDialog('操作失败');
    return false;
  } else {
    return true;
  }
};
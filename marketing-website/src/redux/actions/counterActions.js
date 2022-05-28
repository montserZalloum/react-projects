import { DECREMENT, INCREMENT, INC_BY_VALUE } from "./types";

export const incrementAction = async (dispatch) => {
  return dispatch({
    type: INCREMENT,
  });
};
export const decrementAction = (dispatch) => {
  return dispatch({
    type: DECREMENT,
  });
};

export const incrementByValueAction = (value, dispatch) => {
  return dispatch({
    type: INC_BY_VALUE,
    payload: value
  });
};

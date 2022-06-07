import { IS_LOGGED_IN, LOGIN, LOGOUT } from "./types";

export const loginAction = async (user, dispatch) => {
  return dispatch({
    type: LOGIN,
    payload: user,
  })
};

export const logoutAction = async (dispatch) => {
  return dispatch({
    type: LOGOUT,
  })
}

export const isLoggedInAction = async (dispatch) => {
  return dispatch({
    type: IS_LOGGED_IN,
  })
}
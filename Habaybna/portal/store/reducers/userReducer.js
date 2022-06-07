import { LOGIN, LOGOUT,IS_LOGGED_IN } from "../actions/types";

const userReducer = (state = {name: 'aaa'}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    case LOGOUT:
      return {};
    case IS_LOGGED_IN:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
import initialState from "../initialState";
import * as types from "../../types/constants";

export default (state = initialState.notification, action) => {
    switch (action.type) {
    case types.SHOW_MESSAGE:
      return { ...state, visible: true, message: action.message }
    case types.HIDE_MESSAGE:
      return { ...state, visible: false, message: "" }

    default:
      return state
  }
};
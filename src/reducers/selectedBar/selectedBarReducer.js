import * as types from "../../types/constants";
import initialState from "../initialState";

export default (state = initialState.selectedBar, action) => {
  switch (action.type) {
    case types.SELECT_BAR:
      return {...state, selectedBar: action.bar };
    default:
      return state;
  }
};
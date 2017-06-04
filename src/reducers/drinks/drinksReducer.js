import initialState from "../initialState";
import * as types from "../../types/constants";

export default (state = initialState.products, action) => {
  switch (action.type) {
    case types.ADD_DRINK:
      return { ...state, round: action.drink };
    default:
      return state;
  }
};

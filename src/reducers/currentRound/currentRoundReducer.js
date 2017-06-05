import * as types from "../../types/constants";
import initialState from "../initialState";

export default (state = initialState.currentRound, action) => {
  switch (action.type) {
    case types.ADD_DRINK:
      return [ ...state,  { drink: action.drink, price: action.price } ];
    default:
      return state;
  }
};
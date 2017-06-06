import * as types from "../../types/constants";
import initialState from "../initialState";

export default (state = initialState.currentRound, action) => {
  switch (action.type) {
    case types.ADD_DRINK:
      return [...state, { drink: action.drink, price: action.price }];
    case types.REMOVE_DRINK:
      return state.filter((item, index) => index !== action.drink);  
    case types.CLEAR_ROUND:
      return initialState.currentRound;
    default:
      return state;
  }
};

import * as types from "../../types/constants";
import initialState from "../initialState";

export default (state = initialState.rounds, action) => {
  switch (action.type) {
    case types.CONFIRM_ROUND:
      return [
        ...state,
        {
          id: action.round.id,
          bar: action.round.bar,
          orderedAt: action.round.time,
          drinks: action.round.drinks,
          total: action.round.total
        }
      ];
    default:
      return state;
  }
};

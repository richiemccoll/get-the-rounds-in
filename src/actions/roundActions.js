import * as types from "../types/constants";

export const removeDrink = (drink) => {
  return {
    type: types.REMOVE_DRINK,
    drink
  }
}

export const confirmRound = (round) => {
  return {
    type: types.CONFIRM_ROUND,
    round
  }
}

export const clearRound = () => {
    return {
      type: types.CLEAR_ROUND
    }
};
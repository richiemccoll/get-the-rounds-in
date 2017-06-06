import * as types from "../types/constants";

export const removeDrink = (drink) => {
  return {
    type: types.REMOVE_DRINK,
    drink
  }
}

export const confirmRound = (round) => {
  return {
    types: types.CONFIRM_ROUND,
    round
  }
}

export const clearRound = (round) => {
  return {
    types: types.CLEAR_ROUND,
    round
  }
};
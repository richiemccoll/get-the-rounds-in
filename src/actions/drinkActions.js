import * as types from "../types/constants";

export const addDrink = drink => {
  return {
    type: types.ADD_DRINK,
    drink
  }
}
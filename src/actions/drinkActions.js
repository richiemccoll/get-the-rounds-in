import * as types from "../types/constants";

export const addDrink = (drink, price) => {
  return {
    type: types.ADD_DRINK,
    drink,
    price
  }
}
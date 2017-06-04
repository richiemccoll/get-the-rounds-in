import * as types from "../types/constants";

export const selectBar = bar => {
  return {
    type: types.SELECT_BAR,
    bar
  }
}
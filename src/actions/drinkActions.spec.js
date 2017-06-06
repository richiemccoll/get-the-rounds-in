import { expect } from "chai";
import * as actions from "./drinkActions";
import * as types from "../types/constants";

describe("Drink Actions", () => {
  it("should add a drink", () => {
    const drink = {
      drink: "Irn Bru",
      price: 2.7
    };

    const expected = {
      type: types.ADD_DRINK,
      drink: drink.drink,
      price: drink.price
    };

    expect(actions.addDrink(drink.drink, drink.price)).to.deep.equal(expected);
  });
});

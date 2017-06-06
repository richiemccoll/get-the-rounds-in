import { expect } from "chai";
import * as actions from "./roundActions";
import * as types from "../types/constants";

describe("Round Actions", () => {
  it("should remove a drink", () => {
    const drink = 1;

    const expected = {
      type: types.REMOVE_DRINK,
      drink: drink
    };

    expect(actions.removeDrink(drink)).to.deep.equal(expected);
  });

  it("should confirm a round", () => {
    const round = {
      id: 1234567,
      bar: 'Test bar',
      time: 'Tue Jun 06 2017 16:39:06 GMT+1000 (AUS Eastern Standard Time)',
      drinks: [{ drink: 'Irn Bru', price: 2.7 }],
      total: 23.00
    };

    const expected = {
      type: types.CONFIRM_ROUND,
      round: round
    };

    expect(actions.confirmRound(round)).to.deep.equal(expected);
  });

  it("should clear a round", () => {
      const expected = {
          type: types.CLEAR_ROUND
      };

      expect(actions.clearRound()).to.deep.equal(expected);
  });
});

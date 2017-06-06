import { expect } from "chai";
import reducer from "./roundsReducer";
import * as types from "../../types/constants";
import initialState from "../initialState";

describe("Rounds Reducer", () => {
  const getInitialState = () => {
    return [];
  };

  const getAppState = () => {
    return [];
  };

  it("should confirm a round", () => {
    const round = {
      bar: "Test bar",
      drinks: [{ drink: "Irn Bru", price: 2.7 }],
      id: 1234567,
      orderedAt: "Tue Jun 06 2017 16:39:06 GMT+1000 (AUS Eastern Standard Time)"
    };

    const action = { type: types.CONFIRM_ROUND, round };
    const expected = [round];

    expect(reducer(getAppState(), action)).to.deep.equal(expected);
  });

  it("should set initial state by default", () => {
    const action = { type: "unknown" };
    const expected = getInitialState();
    expect(reducer(getInitialState(), action)).to.deep.equal(expected);
  });
});

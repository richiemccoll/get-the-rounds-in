import { expect } from "chai";
import reducer from "./selectedBarReducer";
import * as types from "../../types/constants";

describe("Selected Bar Reducer", () => {
  const getInitialState = () => {
    return {
      selectedBar: {}
    };
  };

  const getAppState = () => {
    return {
      selectedBar: {}
    };
  };

  it("should select a bar", () => {
    const bar = { text: "Test", value: 1 };
    const action = { type: types.SELECT_BAR, bar };
    const expected = Object.assign(getAppState(), {
      selectedBar: { text: "Test", value: 1 }
    });

    expect(reducer(getAppState(), action)).to.deep.equal(expected);
  });

  it("should set initial state by default", () => {
    const action = { type: "unknown" };
    const expected = getInitialState();
    expect(reducer(getInitialState(), action)).to.deep.equal(expected);
  });
});

import { expect } from "chai";
import * as actions from "./barActions";
import * as types from "../types/constants";

describe("Bar Actions", () => {
  it("should select the bar", () => {
    const bar = {
      text: "Stereo",
      value: 1
    };

    const expected = {
      bar: bar,
      type: types.SELECT_BAR
    };

    expect(actions.selectBar(bar)).to.deep.equal(expected);
  });
});

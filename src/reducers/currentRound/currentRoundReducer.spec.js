import { expect } from "chai";
import reducer from "./currentRoundReducer";
import * as types from "../../types/constants";

describe("Current Round Reducer", () => {
  const getInitialState = () => {
    return {
      currentRound: {}
    };
  };

  const getAppState = () => {
    return {
      currentRound: {}
    };
  };

  const itemsInRoundState = () => {
    return {
      currentRound: {
        
      }
    }
  };

//   it("should add a drink", () => {
//     // const test = { drink: 'Irn Bru', price: 2.7 };
//     // const action = { type: types.ADD_DRINK, test };
//     // const expected = Object.assign(getAppState(), {
//     //     drink: { drink: 'Irn Bru', price: 2.7 }
//     // });
//     // expect(reducer(getAppState(), action)).to.deep.equal(expected);
//   });

//   it("should remove a drink", () => {
//     const action = { type: types.REMOVE_DRINK, drink: 1 };
//     const expected = 

//     expect(reducer(itemsInRoundState(), action)).to.deep.equal(expected);
//   });

  it("should clear a round and clear the state back to initial state", () => {
    const action = { type: types.CLEAR_ROUND };
    const expected = {};
    expect(reducer(getAppState(), action)).to.deep.equal(expected);
  });

  it("should set initial state by default", () => {
    const action = { type: "unknown" };
    const expected = { currentRound: {} }
    expect(reducer(getInitialState(), action)).to.deep.equal(expected);
  });
});

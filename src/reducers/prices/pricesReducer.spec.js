import { expect } from "chai";
import reducer from "./pricesReducer";
import * as types from "../../types/constants";

describe("Prices Reducer", () => {
  const getInitialState = () => {
    return [
      {
        barId: 1,
        productId: 2,
        price: 2.75
      },
      {
        barId: 1,
        productId: 5,
        price: 3.75
      },
      {
        barId: 1,
        productId: 4,
        price: 3.80
      },
      {
        barId: 2,
        productId: 1,
        price: 2.70
      },
      {
        barId: 2,
        productId: 3,
        price: 4.00
      },
      {
        barId: 2,
        productId: 4,
        price: 3.80
      },
      {
        barId: 3,
        productId: 2,
        price: 2.70
      },
      {
        barId: 3,
        productId: 4,
        price: 4.00
      },
      {
        barId: 3,
        productId: 5,
        price: 3.80
      },
      {
        barId: 4,
        productId: 1,
        price: 2.70
      },
      {
        barId: 4,
        productId: 3,
        price: 4.00
      },
      {
        barId: 4,
        productId: 4,
        price: 3.80
      },
      {
        barId: 5,
        productId: 1,
        price: 2.70
      },
      {
        barId: 5,
        productId: 3,
        price: 4.00
      },
      {
        barId: 5,
        productId: 4,
        price: 3.80
      }
    ];
  };

  it("should return the prices as part of the initial state", () => {
    const expected = getInitialState();

    expect(reducer(getInitialState())).to.deep.equal(expected);
  });
});

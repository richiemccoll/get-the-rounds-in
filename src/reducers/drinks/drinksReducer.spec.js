import { expect } from "chai";
import reducer from "./drinksReducer";
import * as types from "../../types/constants";

describe("Drinks Reducer", () => {
  const getInitialState = () => {
    return [
      {
        id: 1,
        name: "Tennents Lager",
        image: "./tennents.jpg"
      },
      {
        id: 2,
        name: "Stella Artois",
        image: "./stella.jpeg"
      },
      {
        id: 3,
        name: "Jamesons Whiskey",
        image: "./jamesons.jpg"
      },
      {
        id: 4,
        name: "Jack Daniels & Coke",
        image: "./jackdaniels.jpg"
      },
      {
        id: 5,
        name: "Morgans Spiced & Lemonade",
        image: "./morgans.jpg"
      }
    ];
  };

  it("should return the drinks as part of the initial state", () => {
    const expected = getInitialState();

    expect(reducer(getInitialState())).to.deep.equal(expected);
  });
});

import React from "react";
import RoundContainer from "./RoundContainer";
import renderer from "react-test-renderer";

describe("Round Component", () => {
  const selectedBar = {
    id: 1,
    image_url: "./potstill.jpg",
    name: "The Pot Still",
    address: "154 Hope Street",
    description: "A real local favourite, receiving more shout-outs from our followers than anywhere else. ",
    lat: 0,
    long: 0,
    text: "The Pot Still",
    value: "0"
  };

  const currentRound = [{ drink: 'Irn Bru', price: 2.7 }];

  const removeDrink = () => console.log("removing drink");
  const confirmRound = () => console.log("confirming round");
  const clearRound = () => console.log("clearing round");
  const showNotification = () => console.log("showing notification");

  it("should render the current round items", () => {
    const component = renderer.create(
      <RoundContainer
        bar={selectedBar.text}
        round={currentRound}
        removeDrink={removeDrink}
        confirmRound={confirmRound}
        clearRound={clearRound}
        showNotification={showNotification}
      />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

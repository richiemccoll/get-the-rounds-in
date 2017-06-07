import React from "react";
import Bars from "./Bars";
import BarsContainer from "./BarsContainer";
import renderer from "react-test-renderer";

describe("Bars", () => {
  const bars = [
    {
      id: 1,
      image_url: "./potstill.jpg",
      name: "The Pot Still",
      address: "154 Hope Street",
      description: "A real local favourite, receiving more shout-outs from our followers than anywhere else. It’s a small pub with a massive drink selection, particularly if you’re in the mood for a whisky. ",
      lat: 0,
      long: 0,
      text: "The Pot Still",
      value: "0"
    },
    {
      id: 2,
      image_url: "./stereo.png",
      name: "Stereo & The Old Hairdressers",
      address: "Renfield Lane",
      description: "These are actually two separate bars, but they have the same vibe, same owner and are right next to each other. Both have a chilled out, stripped back aesthetic and well stocked bars.",
      lat: 0,
      long: 0,
      text: "Stereo & The Old Hairdressers",
      value: "1"
    }
  ];

  const selectBar = () => console.log("selecting bar");

  it("should render the Bars component and pass the bars and selectBar function down as props", () => {
    const component = renderer.create(
      <BarsContainer bars={bars} selectBar={selectBar} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should display the bars correctly", () => {
    const component = renderer.create(
      <Bars bars={bars} selectBar={selectBar} />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

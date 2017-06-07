import React from "react";
import Drinks from "./Drinks";
import DrinksContainer from "./DrinksContainer";
import renderer from "react-test-renderer";

describe("Drinks", () => {
  const selectedBar = {
    id: 1,
    image_url: "./potstill.jpg",
    name: "The Pot Still",
    address: "154 Hope Street",
    description: "A real local favourite, receiving more shout-outs from our followers than anywhere else. It’s a small pub with a massive drink selection, particularly if you’re in the mood for a whisky. ",
    lat: 0,
    long: 0,
    text: "The Pot Still",
    value: "0"
  };

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

  const drinks = [
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

  const prices = [
    {
      barId: 1,
      productId: 2,
      price: 2.75
    },
    {
      barId: 1,
      productId: 5,
      price: 3.75
    }
  ];

  const addDrink = () => console.log("adding drink");

  it("renders the Drinks component and passes drinks, prices, currentBar and the addDrink function", () => {
    const component = renderer.create(
      <DrinksContainer
        currentBar={bars.filter(bar => bar.name === selectedBar.text)}
        drinks={drinks}
        prices={prices}
        addDrink={addDrink}
      />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

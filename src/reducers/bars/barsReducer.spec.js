import { expect } from "chai";
import reducer from "./barsReducer";
import * as types from "../../types/constants";

describe("Bars Reducer", () => {
  const getInitialState = () => {
    return [
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
      },
      {
        id: 3,
        image_url: "./tabac.jpg",
        name: "Tabac",
        address: "10 Mitchell Lane",
        description: "Stylish, quirky bar right next to the Lighthouse. Has a great selection of spirits and draught beers from around the world, served (unusually) by the schooner. ",
        lat: 0,
        long: 0,
        text: "Tabac",
        value: "2"
      },
      {
        id: 4,
        image_url: "/sloans.jpg",
        name: "Sloans",
        address: "62 Argyll Arcade",
        description: "One of the oldest pubs in Glasgow (claims to be the oldest) brings a cosy, traditional Scottish atmosphere to the city centre pub scene. ",
        lat: 0,
        long: 0,
        text: "Sloans",
        value: "3"
      },
      {
        id: 5,
        image_url: "./flyingduck.png",
        name: "The Flying Duck",
        address: "142 Renfield Street",
        description: "Not *quite* in the Central/Queen Street Station area, but it’s such a great bar we couldn’t overlook it.",
        lat: 0,
        long: 0,
        text: "The Flying Duck",
        value: "4"
      }
    ];
  };

  it("should return the bars as part of the initial state", () => {
    const expected = getInitialState();

    expect(reducer(getInitialState())).to.deep.equal(expected);
  });
});

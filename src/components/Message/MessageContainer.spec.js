import React from "react";
import MessageContainer from "./MessageContainer";
import renderer from "react-test-renderer";

describe("Message Container", () => {
  const message = {
    message: "This is a notficiation",
    visible: true
  };

  const hideNotification = () => console.log("hiding notification");

  it("should render a message notification", () => {
    const component = renderer.create(
      <MessageContainer message={message.message} />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

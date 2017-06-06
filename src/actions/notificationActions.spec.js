import { expect } from "chai";
import * as actions from "./notificationActions";
import * as types from "../types/constants";

describe("Notification Actions", () => {
  it("should show the notification", () => {
    const message = "Dialog Message";
    const expected = {
      message: message,
      type: types.SHOW_MESSAGE
    };
    expect(actions.showNotification(message)).to.deep.equal(expected);
  });

  it("should hide the notification", () => {
    const expected = {
      type: types.HIDE_MESSAGE
    };
    expect(actions.hideNotification()).to.deep.equal(expected);
  });
});

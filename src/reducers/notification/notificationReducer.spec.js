import { expect } from "chai";
import reducer from "./notificationReducer";
import * as types from "../../types/constants";

describe("Notification Reducer", () => {
  const getInitialState = () => {
    return {
      notification: {
        visible: false,
        message: ""
      }
    };
  };

  const getAppState = () => {
    return {
        visible: false,
        message: ""
    };
  };

  const messageVisibleState = () => {
    return {
        visible: true,
        message: 'Test message'
    }
  };

  it('should show a notification message', () => {
    const action = { type: types.SHOW_MESSAGE, message: 'Test', visible: true };
    const expected = Object.assign(getAppState(), { visible: true, message: 'Test'});

    expect(reducer(getAppState(), action)).to.deep.equal(expected);
  });

  it('should hide the notification message', () => {
    const action = { type: types.HIDE_MESSAGE, visible: false, message: '' };
    const expected = Object.assign(messageVisibleState(), { visible: false, message: '' });

    expect(reducer(messageVisibleState(), action)).to.deep.equal(expected);
  });

  it("should set initial state by default", () => {
    const action = { type: "unknown" };
    const expected = getInitialState();
    expect(reducer(getInitialState(), action)).to.deep.equal(expected);
  });
});

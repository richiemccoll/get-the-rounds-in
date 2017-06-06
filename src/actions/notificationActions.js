import * as types from "../types/constants";

export const showNotification = message => {
  return { type: types.SHOW_MESSAGE, message: message };
};

export function hideNotification() {
  return { type: types.HIDE_MESSAGE };
}

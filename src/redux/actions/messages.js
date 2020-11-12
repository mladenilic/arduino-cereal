import * as types from './types';

const setMessageCount = (count) => ({
  type: types.SET_MESSAGE_COUNT,
  count
});

const addMessage = (message, time) => ({
  type: types.ADD_MESSAGE,
  message,
  time
});

export { setMessageCount, addMessage };

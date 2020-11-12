import * as types from './types';

const setMessageCount = (count) => ({
  type: types.SET_MESSAGE_COUNT,
  count
});

const addMessage = (message) => ({
  type: types.ADD_MESSAGE,
  time: new Date().toLocaleTimeString(),
  message
});

export { setMessageCount, addMessage };

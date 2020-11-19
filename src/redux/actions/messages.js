import * as types from './types';

const setMessageCount = (count) => ({
  type: types.SET_MESSAGE_COUNT,
  count
});

const addMessage = (message, time = new Date()) => ({
  type: types.ADD_MESSAGE,
  message,
  time
});

const outputMessages = () => ({
  type: types.OUTPUT_MESSAGES
});

export { setMessageCount, addMessage, outputMessages };

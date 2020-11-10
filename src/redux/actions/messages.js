const types = require('./types');

const setMessageCount = (count) => ({
  type: types.SET_MESSAGE_COUNT,
  count
});


const addMessage = (message) => ({
  type: types.ADD_MESSAGE,
  message
});


module.exports = { setMessageCount, addMessage };

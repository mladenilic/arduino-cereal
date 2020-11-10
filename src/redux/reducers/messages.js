const types = require('../actions/types');

const initial = {
  count: 10,
  messages: []
};

module.exports = (state = initial, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      let newState = {
        ...state,
        ...{ messages: [...state.messages, action.message].slice(-state.count) }
      };

      return newState.messages.every((v, i) => v === state.messages[i]) ? state : newState;
    case types.SET_MESSAGE_COUNT:
      return {
        ...state,
        ...{ count: action.count }
      };
    default:
      return state;
  }
};

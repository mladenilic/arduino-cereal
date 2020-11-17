import * as types from '../actions/types';

const initial = {
  count: 10,
  messages: []
};

export default (state = initial, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      if (!action.message.length) {
        return state;
      }

      const message = ((state.messages[state.messages.length - 1] || {}).text || '') + action.message;

      return {
        ...state,
        ...{ messages: [
          ...state.messages.slice(0, -1),
          ...message
            .split("\n")
            .filter(Boolean)
            .map(m => ({ text: m.replace(/(\r\n|\n|\r)/gm, ''), time: action.time }))
        ].slice(-state.count) }
      };
    case types.SET_MESSAGE_COUNT:
      return {
        ...state,
        ...{ count: action.count }
      };
    default:
      return state;
  }
};

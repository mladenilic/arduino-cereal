import * as types from '../actions/types';

const initial = {
  count: 10,
  messages: []
};

export default (state = initial, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      let newState = {
        ...state,
        ...{ messages: [
          ...state.messages,
          ...action.message
            .split("\r\n")
            .filter(Boolean)
            .map(m => ({ text: m, time: action.time }))
        ].slice(-state.count) }
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

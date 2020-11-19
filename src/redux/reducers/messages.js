import * as types from '../actions/types';

const initial = {
  count: 10,
  raw: [],
  output: [],
  dirty: false
};

export default (state = initial, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      if (!action.message.length) {
        return state;
      }

      const message = ((state.raw[state.raw.length - 1] || {}).text || '') + action.message;

      return {
        ...state,
        raw: [
          ...state.raw.slice(0, -1),
          ...message
            .split("\n")
            .filter(Boolean)
            .map(m => ({ text: m.replace(/(\r\n|\n|\r)/gm, ''), time: action.time }))
        ].slice(-state.count),
        dirty: true
      };
    case types.OUTPUT_MESSAGES:
      if (!state.dirty) {
        return state;
      }

      return {
        ...state,
        output: [...state.raw]
      };
    case types.SET_MESSAGE_COUNT:
      return {
        ...state,
        count: action.count
      };
    default:
      return state;
  }
};

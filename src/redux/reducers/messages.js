import * as types from '../actions/types';

const initial = {
  count: 10,
  delimiter: '\r\n',
  raw: [],
  output: [],
  terminated: true,
  dirty: false
};

export default (state = initial, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE: {
      if (action.message.length === 0) {
        return state;
      }

      const { message, time, sent } = action;
      const prefix = state.terminated ? '' : (state.raw.pop()?.text || '');
      const messages = (prefix + message).split(state.delimiter).map(text => ({ text, time, sent }));
      const terminated = message.endsWith(state.delimiter);

      terminated && messages.pop();

      return {
        ...state,
        terminated,
        raw: [...state.raw, ...messages].slice(-state.count),
        dirty: true
      };
    }

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

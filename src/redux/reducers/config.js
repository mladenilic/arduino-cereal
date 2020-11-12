import * as types from '../actions/types';

const initial = {
  baud: 9600,
  port: undefined,

  monitor: {
    timestamp: true,
    timestampLocale: "en-GB"
  },

  colors: {
    default: undefined,
    success: "#859900",
    error: "#dc322f",

    global: {
      heading: "#b58900",
      border: "#268bd2"
    },

    monitor: {
      timestamp: undefined,
      text: undefined
    }
  }
};

export default (state = initial, action) => {
  switch (action.type) {
    case types.SET_CONFIG:
      return {
        ...state,
        ...action.config,

        monitor: {
          ...state.monitor,
          ...action.config.monitor
        },
      };
    default:
      return state;
  }
};

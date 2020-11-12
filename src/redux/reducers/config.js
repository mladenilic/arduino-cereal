import * as types from '../actions/types';

const initial = {
  baud: 9600,
  port: undefined,

  monitor: {
    timestamp: true
  },

  colors: {
    default: undefined,

    global: {
      heading: undefined,
      border: "#268bd2",
      title: "#268bd2"
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

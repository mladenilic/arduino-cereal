import * as types from '../actions/types';

const initial = {
  baud: 9600,
  port: undefined,

  theme: {
    modules: {
      monitor: {
        timestamp: true,
        timestampLocale: 'en-GB'
      },

      variables: {
        range: {
          fill: '▇',
          empty: '-'
        },
        flag: {
          on: '▣',
          off: '▢'
        }
      }
    },

    colors: {
      default: '#839496',

      global: {
        heading: '#b58900',
        border: '#268bd2'
      },

      status: {
        connected: '#859900',
        error: '#dc322f',
      },

      monitor: {
        timestamp: '#fff',
        text: '#fff'
      },

      variables: {
        range: {
          fill: '#b58900',
          empty: '#268bd2'
        },
        flag: {
          on: '#268bd2',
          off: '#839496'
        }
      }
    }
  },
};

export default (state = initial, action) => {
  switch (action.type) {
    case types.SET_CONFIG:
      return {
        ...state,
        ...action.config,
      };
    default:
      return state;
  }
};

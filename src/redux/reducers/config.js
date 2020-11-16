import * as types from '../actions/types';

const initial = {
  baud: 9600,
  port: undefined,
  theme: {},
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

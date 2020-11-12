import * as types from '../actions/types';

const initial = {};

export default (state = initial, action) => {
  switch (action.type) {
    case types.UPDATE_VARIABLE:
      if (state[action.name] === action.value) {
        return state;
      }

      return {
        ...state,
        ...{ [action.name]: action.value }
      };
    default:
      return state;
  }
};

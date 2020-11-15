import * as types from '../actions/types';

const initial = {};

export default (state = initial, action) => {
  switch (action.type) {
    case types.UPDATE_VARIABLE:
      const variable = action.variable;
      if ((state[action.name] || {}).value === variable.value) {
        return state;
      }

      return {
        ...state,
        ...{ [action.name]: variable }
      };
    default:
      return state;
  }
};

import * as types from '../actions/types';

const initial = {
  raw: {},
  output: {},
  dirty: false
};

export default (state = initial, action) => {
  switch (action.type) {
    case types.UPDATE_VARIABLE: {
      const { variable } = action;
      if (state.raw[action.name]?.value === variable.value) {
        return state;
      }

      return {
        ...state,
        raw: {
          ...state.raw,
          ...{ [action.name]: variable }
        },
        dirty: true
      };
    }

    case types.OUTPUT_VARIABLES:
      if (!state.dirty) {
        return state;
      }

      return {
        ...state,
        output: { ...state.raw }
      };
    default:
      return state;
  }
};

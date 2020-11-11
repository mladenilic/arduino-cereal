const types = require('../actions/types');

const initial = {};

module.exports = (state = initial, action) => {
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

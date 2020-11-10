const types = require('../actions/types');

const initial = {};

module.exports = (state = initial, action) => {
  switch (action.type) {
    case types.VARIABLE_UPDATE:
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

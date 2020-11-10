const types = require('../actions/types');

const initial = new Map();

module.exports = (state = initial, action) => {
  switch (action.type) {
    case types.VARIABLE_UPDATE:
      state.set(action.name, action.value);

      return state;
    default:
      return state;
  }
};

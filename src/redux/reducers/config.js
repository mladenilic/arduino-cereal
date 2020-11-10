const types = require('../actions/types');

const initial = {
  baud: 9600,
  port: null
};

module.exports = (state = initial, action) => {
  switch (action.type) {
    case types.CONFIG_SET:
      return {
        ...state,
        ...action.config
      };
    default:
      return state;
  }
};

const types = require('../actions/types');

const initial = {
  status: 'pending'
};

module.exports = (state = initial, action) => {
  switch (action.type) {
    case types.SET_SERIAL_STATUS:
      return {
        ...state,
        ...{ status: action.status }
      };
    default:
      return state;
  }
};

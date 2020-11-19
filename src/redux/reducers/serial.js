import * as types from '../actions/types';

const initial = {
  status: 'pending'
};

export default (state = initial, action) => {
  switch (action.type) {
    case types.SET_SERIAL_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};

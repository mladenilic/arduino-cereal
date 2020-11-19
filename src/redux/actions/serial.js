import * as types from './types';

const setSerialStatus = status => ({
  type: types.SET_SERIAL_STATUS,
  status
});

export { setSerialStatus };

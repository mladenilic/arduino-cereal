const types = require('./types');

const setSerialStatus = (status) => ({
  type: types.SET_SERIAL_STATUS,
  status,
});

module.exports = { setSerialStatus };

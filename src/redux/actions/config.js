const types = require('./types');

const setConfig = (config) => ({
  type: types.SET_CONFIG,
  config,
});

module.exports = { setConfig };

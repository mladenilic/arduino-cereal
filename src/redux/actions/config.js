const types = require('./types');

const setConfig = (config) => ({
  type: types.CONFIG_SET,
  config,
});

module.exports = { setConfig };

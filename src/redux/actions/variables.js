const types = require('./types');

const updateVariable = (name, value) => ({
  type: types.VARIABLE_UPDATE,
  name,
  value
});

module.exports = { updateVariable };

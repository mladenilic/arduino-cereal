const types = require('./types');

const updateVariable = (name, value) => ({
  type: types.UPDATE_VARIABLE,
  name,
  value
});

module.exports = { updateVariable };

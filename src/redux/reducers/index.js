const { combineReducers } = require('redux');
const config = require('./config');
const variables = require('./variables');

module.exports = combineReducers({
  config: config,
  variables: variables,
});

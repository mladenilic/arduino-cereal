const { combineReducers } = require('redux');
const config = require('./config');
const variables = require('./variables');
const messages = require('./messages');

module.exports = combineReducers({
  config: config,
  messages: messages,
  variables: variables,
});

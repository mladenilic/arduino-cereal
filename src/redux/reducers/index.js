const { combineReducers } = require('redux');
const config = require('./config');
const messages = require('./messages');
const serial = require('./serial');
const variables = require('./variables');

module.exports = combineReducers({
  config: config,
  messages: messages,
  serial: serial,
  variables: variables,
});

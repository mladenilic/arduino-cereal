const { createStore } = require('redux');
const reducers = require('../reducers');

module.exports = createStore(reducers);

'use strict';
const React = require('react');

const { Provider } = require('react-redux/lib/alternate-renderers');
const store = require('./redux/store');
const loadUserConfig = require('./utils/config');

const App = require('import-jsx')('./app');

const ArduinoCereal = ({ config }) => (
  <Provider store={store}>
    <App config={Object.assign(loadUserConfig(), config)} />
  </Provider>
);

module.exports = ArduinoCereal;

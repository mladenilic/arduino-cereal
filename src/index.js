'use strict';
const React = require('react');

const { Provider } = require('react-redux/lib/alternate-renderers');
const store = require('./redux/store');

const App = require('import-jsx')('./app');

const ArduinoCereal = ({ config }) => (
  <Provider store={store}>
    <App config={config} />
  </Provider>
);

module.exports = ArduinoCereal;

'use strict';
const React = require('react');

const { Box } = require('ink');
const FullScreen = require('import-jsx')('./components/util/fullscreen');
const Header = require('import-jsx')('./components/header');
const Variables = require('import-jsx')('./components/variables');
const Monitor = require('import-jsx')('./components/monitor');

const { connect } = require('react-redux/lib/alternate-renderers');
const { setConfig } = require('./redux/actions/config');
const { updateVariable } = require('./redux/actions/variables');
const { addMessage } = require('./redux/actions/messages');
const { setSerialStatus } = require('./redux/actions/serial');

const Serial = require('./serial');

const App = ({ config, setConfig, updateVariable, addMessage, setSerialStatus }) => {
  React.useEffect(() => { setConfig(config) }, []);
  React.useEffect(() => {
    Serial.connect(config.port, config.baud || 9600)
      .on('connect', () => setSerialStatus('success'))
      .on('error', () => setSerialStatus('error'))
      .on('variable', ([name, value]) => updateVariable(name, value))
      .on('message', (message) => addMessage(message));
  }, []);

  return <FullScreen>
    <Box flexDirection="column" height={process.stdout.rows}>
      <Header/>
      <Box flexDirection="row" flexGrow={1}>
        <Variables/>
        <Monitor/>
      </Box>
    </Box>
  </FullScreen>
};

module.exports = connect(
  null,
  { setConfig, updateVariable, addMessage, setSerialStatus }
)(App);

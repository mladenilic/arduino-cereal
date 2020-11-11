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

const SerialPort = require('serialport');
const CerealParser = require('./serial/parser');

const App = ({ config, setConfig, updateVariable, addMessage }) => {
  React.useEffect(() => { setConfig(config) }, []);
  React.useEffect(() => {
    (new SerialPort(config.port, { baudRate: config.baud || 9600 }))
      .pipe(new CerealParser())
      .on('open', () => {})
      .on('data', data => {
        if (data.variable) {
          updateVariable(...data.value);
        } else {
          addMessage(data.value);
        }
      }).on('error', error => log.error(JSON.stringify(error)));
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
  { setConfig, updateVariable, addMessage }
)(App);

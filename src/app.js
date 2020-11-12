'use strict';

import React from 'react';
import { Box } from 'ink';

import { connect } from 'react-redux/lib/alternate-renderers';
import { setConfig } from './redux/actions/config';
import { updateVariable } from './redux/actions/variables';
import { addMessage } from './redux/actions/messages';
import { setSerialStatus } from './redux/actions/serial';

import Serial from './serial';

import Header from './components/header';
import Variables from './components/variables';
import Monitor from './components/monitor';

const App = ({ config, setConfig, updateVariable, addMessage, setSerialStatus }) => {
  React.useEffect(() => { setConfig(config) }, []);
  React.useEffect(() => {
    Serial.connect(config.port, config.baud || 9600)
      .on('connect', () => setSerialStatus('success'))
      .on('error', () => setSerialStatus('error'))
      .on('variable', ([name, value]) => updateVariable(name, value))
      .on('message', (message) => addMessage(message));
  }, []);

  return <Box flexDirection="column" height={process.stdout.rows}>
    <Header/>
    <Box flexDirection="row" flexGrow={1}>
      <Variables/>
      <Monitor/>
    </Box>
  </Box>
};

export default connect(
  null,
  { setConfig, updateVariable, addMessage, setSerialStatus }
)(App);

import React from 'react';

import { connect } from 'react-redux/lib/alternate-renderers';
import { setConfig } from './redux/actions/config';
import { updateVariable, outputVariables } from './redux/actions/variables';
import { addMessage, outputMessages } from './redux/actions/messages';
import { setSerialStatus } from './redux/actions/serial';

import Serial from './serial';

import Box from './components/base/box';
import Header from './components/header';
import Variables from './components/variables';
import Monitor from './components/monitor';

import useInit from './utils/use-init';

const App = ({ config, setConfig, updateVariable, outputVariables, addMessage, outputMessages, setSerialStatus }) => {
  useInit(() => { setConfig(config) });

  useInit(() => setInterval(() => {
    outputVariables();
    outputMessages();
  }, 1000 / Math.min(Math.max(config.fps || 15, 1), 60)));

  useInit(() => {
    Serial.connect(config.port, config.baud || 9600)
      .on('connect', () => setSerialStatus('success'))
      .on('error', () => setSerialStatus('error'))
      .on('variable', ([type, name, value, ...options]) => updateVariable(type, name, value, options))
      .on('message', (message) => addMessage(message));
  });

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
  { setConfig, updateVariable, outputVariables, addMessage, outputMessages, setSerialStatus }
)(App);

#!/usr/bin/env node
'use strict';

import React from 'react';
import { render } from 'ink';

import { Provider } from 'react-redux/lib/alternate-renderers';
import store from './redux/store';
import loadUserConfig from './utils/config';

import App from './app';
import cli from './utils/cli';

const ArduinoCereal = ({ config }) => (
  <Provider store={store}>
    <App config={Object.assign(loadUserConfig(), config)} />
  </Provider>
);

render(React.createElement(ArduinoCereal, { config: cli.flags }));

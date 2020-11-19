#!/usr/bin/env node
import React from 'react';
import { render } from 'ink';

import { Provider } from 'react-redux/lib/alternate-renderers';
import store from './redux/store';
import loadUserConfig from './utils/config';

import App from './app';
import cli from './utils/cli';

import Theme from './theme';

const userConfig = loadUserConfig();
const theme = Theme.load(cli.flags.theme, userConfig.theme || {});
const config = Object.assign(userConfig, cli.flags, { theme });

const ArduinoCereal = ({ config }) => (
  <Provider store={store}>
    <App config={config}/>
  </Provider>
);

render(<ArduinoCereal config={config} />);

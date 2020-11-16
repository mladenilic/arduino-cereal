#!/usr/bin/env node
import React, { useState } from 'react';
import { render } from 'ink';

import { Provider } from 'react-redux/lib/alternate-renderers';
import store from './redux/store';
import loadUserConfig from './utils/config';

import App from './app';
import cli from './utils/cli';

import useInit from './utils/use-init';

import Theme from './theme';

const userConfig = loadUserConfig();

const ArduinoCereal = ({ cli }) => {
  const [theme, setTheme] = useState({});
  useInit(() => setTheme(Theme.load(cli.theme, userConfig.theme || {})));

  return <Provider store={store}>
    <App config={Object.assign(userConfig, cli, { theme })}/>
  </Provider>
};

render(React.createElement(ArduinoCereal, { cli: cli.flags }));

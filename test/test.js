import React from 'react';
import chalk from 'chalk';
import test from 'ava';
import {render} from 'ink-testing-library';
import App from '../src/app';

test('greet unknown user', t => {
  const {lastFrame} = render(<App/>);

  t.is(lastFrame(), chalk`Baud rate: {green 9600}`);
});

test('greet user with a name', t => {
  const {lastFrame} = render(<App baud="19200"/>);

  t.is(lastFrame(), chalk`Baud rate: {green 19200}`);
});

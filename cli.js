#!/usr/bin/env node

'use strict';
const React = require('react');
const { render } = require('ink');
const meow = require('meow');

const ArduinoCereal = require('import-jsx')('./src');

const cli = meow(`
  Usage
    $ arduino-cereal

  Options
    --port  Serial port
    --baud  Baud rate (default: 9600)
`);

render(React.createElement(ArduinoCereal, { config: cli.flags }));

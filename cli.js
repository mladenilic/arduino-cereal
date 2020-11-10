#!/usr/bin/env node
'use strict';
const React = require('react');
const {render} = require('ink');
const meow = require('meow');

const app = require('import-jsx')('./src/app');

const cli = meow(`
  Usage
    $ arduino-cereal

  Options
    --port  Serial port
    --baud  Baud rate (default: 9600)
`);

render(React.createElement(app, cli.flags));

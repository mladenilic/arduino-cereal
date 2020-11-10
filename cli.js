#!/usr/bin/env node
'use strict';
const React = require('react');
const {render} = require('ink');
const meow = require('meow');

const ui = require('import-jsx')('./ui');

const cli = meow(`
  Usage
    $ arduino-cereal

  Options
    --baud  Baud rate (default: 9600)
`);

render(React.createElement(ui, cli.flags));

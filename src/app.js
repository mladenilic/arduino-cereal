'use strict';
const React = require('react');
const {Text} = require('ink');

const App = ({baud = 9600}) => (
  <Text>
    Baud rate: <Text color="green">{baud}</Text>
  </Text>
);

module.exports = App;

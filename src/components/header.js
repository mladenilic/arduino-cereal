'use strict';
const React = require('react');
const { Box, Text } = require('ink');

const { connect } = require('react-redux/lib/alternate-renderers');

const Header = ({ config }) => {
  return <Box paddingX={1} paddingY={0} borderStyle="single">
    <Text>Arduino Cereal Monitor – Port: {config.port || 'n/a'}, Baud rate: {config.baud}</Text>
  </Box>
};

module.exports = connect(
  (state) => ({ config: state.config }),
)(Header);

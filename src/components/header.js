'use strict';
const React = require('react');

const Box = require('import-jsx')('./base/box');
const Text = require('import-jsx')('./base/text');
const Heading = require('import-jsx')('./base/heading');

const { connect } = require('react-redux/lib/alternate-renderers');

const Header = ({ config }) => {
  return <Box paddingX={1} paddingY={0} borderStyle="single">
    <Heading>Arduino Cereal Monitor</Heading>
    <Text> — Port: <Text bold>{config.port || '/'}</Text>, Baud rate: <Text bold>{config.baud}</Text></Text>
  </Box>
};

module.exports = connect(
  (state) => ({ config: state.config }),
)(Header);

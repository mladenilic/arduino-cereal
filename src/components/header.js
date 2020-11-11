'use strict';

const React = require('react');
const { Spacer } = require('ink');

const Box = require('import-jsx')('./base/box');
const Text = require('import-jsx')('./base/text');
const Heading = require('import-jsx')('./base/heading');

const { connect } = require('react-redux/lib/alternate-renderers');

const Header = ({ config, serial }) => {
  const status = () => {
    switch (serial.status) {
      case 'success': return <Text color="#0f0">connected</Text>;
      case 'error': return <Text color="#f00">error</Text>;
      case 'pending': return <Text color="#00f">connecting...</Text>;
      default: return null;
    }
  };

  return <Box paddingX={1} paddingY={0} borderStyle="single">
    <Heading>Arduino Cereal Monitor</Heading>
    <Text> — Port: <Text bold>{config.port || '/'}</Text>, Baud rate: <Text bold>{config.baud}</Text></Text>
    <Spacer/>
    <Text>Status: {status()}</Text>
  </Box>
};

module.exports = connect(
  (state) => ({ config: state.config, serial: state.serial }),
)(Header);

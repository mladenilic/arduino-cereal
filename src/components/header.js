'use strict';

import React from 'react';

import { Spacer } from 'ink';

import Box from './base/box';
import Text from './base/text';
import Heading from './base/heading';

import { connect } from 'react-redux/lib/alternate-renderers';

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

export default connect(
  (state) => ({ config: state.config, serial: state.serial }),
)(Header);

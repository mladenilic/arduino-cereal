import React from 'react';

import { Spacer } from 'ink';

import Box from './base/box';
import Text from './base/text';
import Heading from './base/heading';
import Status from './header/status';

import { connect } from 'react-redux/lib/alternate-renderers';

const Header = ({ config }) => (
  <Box paddingX={1} paddingY={0} borderStyle="single">
    <Heading>Arduino Cereal Monitor</Heading>
    <Text> — Port: <Text bold>{config.port || '/'}</Text>, Baud rate: <Text bold>{config.baud}</Text></Text>
    <Spacer/>
    <Status/>
  </Box>
);

export default connect(
  state => ({ config: state.config })
)(Header);

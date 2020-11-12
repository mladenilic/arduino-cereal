'use strict';

import React from 'react';

import { connect } from 'react-redux/lib/alternate-renderers';

import Box from './box';
import Text from './text';

const Heading = ({ config, color, children }) => (
  <Box justifyContent="flex-start">
    <Text>[<Text bold color={color || config.colors.global.heading}>{children}</Text>]</Text>
  </Box>
);

export default connect(
  (state) => ({ config: state.config }),
)(Heading);

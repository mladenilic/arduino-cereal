import React from 'react';

import { connect } from 'react-redux/lib/alternate-renderers';

import Box from './box';
import Text from './text';

const Heading = ({ theme, color, children }) => (
  <Box justifyContent="flex-start">
    <Text>[<Text bold color={color || theme?.colors?.global?.heading}>{children}</Text>]</Text>
  </Box>
);

export default connect(
  state => ({ theme: state?.config?.theme || {} })
)(Heading);

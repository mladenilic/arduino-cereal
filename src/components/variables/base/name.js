import React from 'react';

import Box from '../../base/box';
import Text from '../../base/text';
import { connect } from 'react-redux/lib/alternate-renderers';

const VariableName = ({ name, theme }) => (
  <Box width={17} marginRight={3}>
    <Box><Text color={theme.colors?.variables?.name} wrap="truncate">{name}</Text></Box>
    <Text>: </Text>
  </Box>
);

export default connect(
  state => ({ theme: state.config?.theme || {} })
)(VariableName);

import React from 'react';

import Box from '../base/box';
import Text from '../base/text';

const Variable = ({ name, variable }) => {
  return <Box flexDirection="row">
    <Text>{name}: </Text>
    <Text>{variable.value}</Text>
  </Box>
};

export default Variable;

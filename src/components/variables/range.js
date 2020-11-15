'use strict';

import React from 'react';

import Box from '../base/box';
import Text from '../base/text';

const Range = ({ name, variable }) => {
  const length = 20;
  const [min, max] = variable.options.map(a => parseFloat(a));
  const value = parseFloat(variable.value);

  const completed = Math.round(length * value / (max - min));

  return <Box flexDirection="row">
    <Text>{name}: </Text>
    <Text>{min}|<Text>{'▇'.repeat(completed)}</Text><Text>{'-'.repeat(length - completed)}</Text>|{max}</Text>
    <Text> ({value})</Text>
  </Box>
};

export default Range;

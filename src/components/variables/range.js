'use strict';

import React from 'react';

import Box from '../base/box';
import Text from '../base/text';

const clamp = (x, min, max) => Math.min(Math.max(x, min), max);

const Range = ({ name, variable }) => {
  const length = 20;
  const [min, max] = variable.options.map(a => parseFloat(a));
  const value = parseFloat(variable.value);

  const completed = Math.round(length * value / (max - min));

  return <Box flexDirection="row">
    <Text>{name}: </Text>
    <Text width={length}>{min}|<Text>{'▇'.repeat(clamp(completed, 0, length))}</Text><Text>{'-'.repeat(clamp(length - completed, 0, length))}</Text>|{max}</Text>
    <Text> ({value})</Text>
  </Box>
};

export default Range;

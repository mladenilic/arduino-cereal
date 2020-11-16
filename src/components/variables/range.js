import React from 'react';

import Box from '../base/box';
import Text from '../base/text';
import VariableName from './base/name';
import VariableValue from './base/value';
import Gauge from './base/gauge';

const Range = ({ name, variable }) => {
  const [min, max] = variable.options.map(a => parseFloat(a));
  const value = parseFloat(variable.value);

  return <Box flexDirection="row">
    <VariableName name={name} />
    <Gauge min={min} max={max} value={value}/>
    <Text> (<VariableValue value={value}/>)</Text>
  </Box>
};

export default Range;

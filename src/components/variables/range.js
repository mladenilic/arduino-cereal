import React from 'react';

import Box from '../base/box';
import Text from '../base/text';
import VariableName from './base/name';
import VariableValue from './base/value';
import Gauge from './base/gauge';

const Range = React.memo(({ variable }) => {
  const [min, max] = variable.options.map(a => Number.parseFloat(a));
  const value = Number.parseFloat(variable.value);

  return (
    <Box flexDirection="row">
      <VariableName name={variable.name}/>
      <Gauge min={min} max={max} value={value}/>
      <Text> (<VariableValue value={value}/>)</Text>
    </Box>
  );
});

export default Range;

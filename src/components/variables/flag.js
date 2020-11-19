import React from 'react';

import Box from '../base/box';
import Indicator from './base/indicator';
import VariableName from './base/name';
import VariableValue from './base/value';

const Flag = React.memo(({ variable }) => {
  const value = Boolean(Number.parseInt(variable.value, 10));

  return (
    <Box flexDirection="row">
      <VariableName name={variable.name}/>
      <Indicator value={value}/>
      <VariableValue value={value ? 'HIGH' : 'LOW'}/>
    </Box>
  );
});

export default Flag;

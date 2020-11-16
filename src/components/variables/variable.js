import React from 'react';

import Box from '../base/box';
import VariableName from './base/name';
import VariableValue from './base/value';

const Variable = ({ name, variable }) => {
  return <Box flexDirection="row">
    <VariableName name={name}/>
    <VariableValue value={variable.value}/>
  </Box>
};

export default Variable;

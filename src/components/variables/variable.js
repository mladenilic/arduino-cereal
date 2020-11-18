import React from 'react';

import Box from '../base/box';
import VariableName from './base/name';
import VariableValue from './base/value';

const Variable = React.memo(({ variable }) => (
  <Box flexDirection="row">
    <VariableName name={variable.name}/>
    <VariableValue value={variable.value}/>
  </Box>
));

export default Variable;

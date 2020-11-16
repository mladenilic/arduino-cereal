import React from 'react';

import Box from './base/box';
import Heading from './base/heading';

import Variable from './variables/variable';
import Range from './variables/range';
import Flag from './variables/flag';

import { connect } from 'react-redux/lib/alternate-renderers';

const variableComponent = (type) => {
  return ({
    '0': Variable,
    '1': Range,
    '2': Flag,
  })[type] || Variable;
};

const Variables = ({ variables = {} }) => {
  return <Box flexDirection="column" borderStyle="single" width={50} paddingX={1} marginRight={1}>
    <Heading>Variables</Heading>
    <Box flexDirection="column">
      {Object.entries(variables).map(([name, variable]) => {
        const Component = variableComponent(variable.type);

        return <Component key={name} name={name} variable={variable} />
      })}
    </Box>
  </Box>
};

export default connect(
  (state) => ({ variables: state.variables }),
)(Variables);

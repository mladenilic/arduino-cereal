import React from 'react';

import Box from './base/box';
import Heading from './base/heading';

import Variable from './variables/variable';
import Range from './variables/range';
import Flag from './variables/flag';

import { connect } from 'react-redux/lib/alternate-renderers';

const variableComponent = type => ({
  0: Variable,
  1: Range,
  2: Flag
}[type] || Variable);

const Variables = ({ variables = {} }) => (
  <Box paddingX={1} marginRight={1} flexDirection="column" borderStyle="single">
    <Heading>Variables</Heading>
    <Box width={60} flexDirection="column">
      {Object.entries(variables).map(([name, variable]) => {
        const Component = variableComponent(variable.type);

        return <Component key={name} variable={variable} width="100%"/>;
      })}
    </Box>
  </Box>
);

export default connect(
  state => ({ variables: state.variables.output })
)(Variables);

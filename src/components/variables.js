'use strict';

import React from 'react';

import Box from './base/box';
import Text from './base/text';
import Heading from './base/heading';

import { connect } from 'react-redux/lib/alternate-renderers';

const Variables = ({ variables = {} }) => {
  return <Box flexDirection="column" borderStyle="single" width={50} paddingX={1} marginRight={1}>
    <Heading>Variables</Heading>
    <Box flexDirection="column">
      {Object.entries(variables).map(([name, variable]) => (
        <Box flexDirection="row" key={name}>
          <Text>{name}: </Text>
          <Text>{variable.value} ({variable.type})</Text>
        </Box>
      ))}
    </Box>
  </Box>
};

export default connect(
  (state) => ({ variables: state.variables }),
)(Variables);

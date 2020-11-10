'use strict';
const React = require('react');
const { Box, Text } = require('ink');

const { connect } = require('react-redux/lib/alternate-renderers');

const Variables = ({ variables }) => {
  return <Box flexDirection="column" borderStyle="single" flexGrow={1} paddingX={1} paddingY={0} marginRight={0.5}>
    <Box flexDirection="row">
      <Text>Variable 1: </Text>
      <Text>100</Text>
    </Box>

    <Box flexDirection="row">
      <Text>Variable 2: </Text>
      <Text>100</Text>
    </Box>

    <Box flexDirection="row">
      <Text>Variable 3: </Text>
      <Text>100</Text>
    </Box>
  </Box>
};

module.exports = connect(
  (state) => ({ variables: state.variables }),
)(Variables);

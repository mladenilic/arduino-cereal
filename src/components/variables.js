'use strict';
const React = require('react');
const { Box, Text } = require('ink');

const { connect } = require('react-redux/lib/alternate-renderers');

const Variables = ({ variables = {} }) => {
  return <Box flexDirection="column" borderStyle="single" flexGrow={1} paddingX={1} paddingY={0} marginRight={0.5}>
    {Object.entries(variables).map(([name, value]) => (
      <Box flexDirection="row" key={name}>
        <Text>{name}: </Text>
        <Text>{value}</Text>
      </Box>
    ))}
  </Box>
};

module.exports = connect(
  (state) => ({ variables: state.variables }),
)(Variables);
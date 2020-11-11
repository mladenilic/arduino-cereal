'use strict';
const React = require('react');

const Box = require('import-jsx')('./base/box');
const Text = require('import-jsx')('./base/text');
const Heading = require('import-jsx')('./base/heading');

const { connect } = require('react-redux/lib/alternate-renderers');

const Variables = ({ variables = {} }) => {
  return <Box flexDirection="column" borderStyle="single" width={50} paddingX={1} marginRight={1}>
    <Heading>Variables</Heading>
    <Box flexDirection="column">
      {Object.entries(variables).map(([name, value]) => (
        <Box flexDirection="row" key={name}>
          <Text>{name}: </Text>
          <Text>{value}</Text>
        </Box>
      ))}
    </Box>
  </Box>
};

module.exports = connect(
  (state) => ({ variables: state.variables }),
)(Variables);

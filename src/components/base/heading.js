'use strict';
const React = require('react');

const Box = require('import-jsx')('./Box');
const Text = require('import-jsx')('./text');

const { connect } = require('react-redux/lib/alternate-renderers');

const Heading = ({ config, children }) => (
  <Box justifyContent="flex-start">
    <Text>[<Text bold color={config.colors.global.heading}>{children}</Text>]</Text>
  </Box>
);

module.exports = connect(
  (state) => ({ config: state.config }),
)(Heading);

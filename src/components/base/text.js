'use strict';
const React = require('react');
const { Text: InkText } = require('ink');

const { connect } = require('react-redux/lib/alternate-renderers');

const Text = ({ config, color, children, ...rest }) => <InkText color={color || config.colors.default} {...rest}>{children}</InkText>;

module.exports = connect(
  (state) => ({ config: state.config }),
)(Text);

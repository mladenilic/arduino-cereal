'use strict';
const React = require('react');
const { Box: InkBox } = require('ink');

const { connect } = require('react-redux/lib/alternate-renderers');

const Box = ({ config, children, boxRef, borderColor, ...rest }) => {
  const color = borderColor || config.colors.global.border || config.colors.default;

  return <InkBox ref={boxRef} borderColor={color} {...rest}>{children}</InkBox>
};

module.exports = connect(
  (state) => ({ config: state.config }),
)(Box);

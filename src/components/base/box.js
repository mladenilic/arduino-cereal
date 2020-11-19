import React from 'react';
import { Box as InkBox } from 'ink';
import { connect } from 'react-redux/lib/alternate-renderers';

const Box = ({ theme, children, boxRef, borderColor, ...rest }) => {
  const color = borderColor || theme?.colors?.global.border || theme?.colors?.default;

  return <InkBox ref={boxRef} borderColor={color} {...rest}>{children}</InkBox>;
};

export default connect(
  state => ({ theme: state?.config?.theme || {} })
)(Box);

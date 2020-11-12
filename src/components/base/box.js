'use strict';

import React from 'react';
import { Box as InkBox } from 'ink';
import { connect } from 'react-redux/lib/alternate-renderers';

const Box = ({ config, children, boxRef, borderColor, ...rest }) => {
  const color = borderColor || config.colors.global.border || config.colors.default;

  return <InkBox ref={boxRef} borderColor={color} {...rest}>{children}</InkBox>
};

export default connect(
  (state) => ({ config: state.config }),
)(Box);

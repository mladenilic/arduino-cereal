'use strict';
import React from 'react';

import { Text as InkText } from 'ink';
import { connect } from 'react-redux/lib/alternate-renderers';

const Text = ({ config, color, children, ...rest }) => (
  <InkText color={color || config.colors.default} {...rest}>{children}</InkText>
);

export default connect(
  (state) => ({ config: state.config }),
)(Text);

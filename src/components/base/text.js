import React from 'react';

import { Text as InkText } from 'ink';
import { connect } from 'react-redux/lib/alternate-renderers';

const Text = ({ theme, color, children, ...rest }) => (
  <InkText color={color || theme?.colors?.default} {...rest}>{children}</InkText>
);

export default connect(
  state => ({ theme: state?.config?.theme || {} })
)(Text);

import React from 'react';

import Text from '../../base/text';
import { connect } from 'react-redux/lib/alternate-renderers';

const VariableValue = ({ value, theme }) => <Text bold color={theme.colors?.variables?.value}>{value}</Text>;

export default connect(
  state => ({ theme: state.config?.theme || {} })
)(VariableValue);

import React from 'react';
import Text from '../base/text';

import { connect } from 'react-redux/lib/alternate-renderers';

const Timestamp = ({ monitor, time, ...props }) => {
  if (!monitor.timestamp) {
    return null;
  }

  return <Text>[<Text {...props}>{time.toLocaleTimeString(monitor.timestampLocale)}</Text>] </Text>;
};

export default connect(
  state => ({ monitor: state.config?.theme?.modules?.monitor || {} })
)(Timestamp);

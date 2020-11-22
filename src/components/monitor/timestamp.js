import React from 'react';
import Text from '../base/text';

import { connect } from 'react-redux/lib/alternate-renderers';

const Timestamp = ({ monitor, colors, time, ...props }) => {
  if (!monitor.timestamp) {
    return null;
  }

  return <Text>[<Text color={colors.timestamp} {...props}>{time.toLocaleTimeString(monitor.timestampLocale)}</Text>]</Text>;
};

export default connect(
  state => ({
    monitor: state.config?.theme?.modules?.monitor || {},
    colors: state.config.theme?.colors?.monitor || {}
  })
)(Timestamp);

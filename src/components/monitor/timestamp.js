'use strict';

import React from 'react';
import Text from '../base/text';

import { connect } from 'react-redux/lib/alternate-renderers';

const Timestamp = ({ config, time }) => {
  if (!config.monitor.timestamp) {
    return null;
  }

  return <Text>[<Text>{time}</Text>] </Text>;
};

export default connect(
  (state) => ({ config: state.config }),
)(Timestamp);

'use strict';

import React from 'react';
import Text from '../base/text';

import { connect } from 'react-redux/lib/alternate-renderers';

const circle = String.fromCharCode(11044);

const Status = ({ config, serial }) => (
  <Text>
    <Text>Status: </Text>
    <Text color={config.colors[serial.status]}>{serial.status === 'pending' ? 'Connecting...' : circle} </Text>
  </Text>
);

export default connect(
  (state) => ({ config: state.config, serial: state.serial }),
)(Status);

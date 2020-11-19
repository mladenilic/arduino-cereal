import React from 'react';
import Text from '../base/text';

import { connect } from 'react-redux/lib/alternate-renderers';

const circle = String.fromCharCode(11044);

const Status = ({ theme, serial }) => (
  <Text>
    <Text>Status: </Text>
    <Text color={theme.colors?.status[serial.status]}>{serial.status === 'pending' ? 'Connecting...' : circle} </Text>
  </Text>
);

export default connect(
  state => ({
    theme: state?.config?.theme || {},
    serial: state.serial
  })
)(Status);

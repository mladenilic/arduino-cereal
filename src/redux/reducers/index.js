import { combineReducers } from 'redux';

import config from './config';
import messages from './messages';
import serial from './serial';
import variables from './variables';

export default combineReducers({
  config,
  messages,
  serial,
  variables
});

import * as types from './types';

const setConfig = config => ({
  type: types.SET_CONFIG,
  config
});

export { setConfig };

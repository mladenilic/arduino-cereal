import * as types from './types';

const updateVariable = (name, value) => ({
  type: types.UPDATE_VARIABLE,
  name,
  value
});

export { updateVariable };

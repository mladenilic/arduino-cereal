import * as types from './types';

const updateVariable = (type, name, value, options) => ({
  type: types.UPDATE_VARIABLE,
  name,
  variable: { name, type, value, options }
});

export { updateVariable };

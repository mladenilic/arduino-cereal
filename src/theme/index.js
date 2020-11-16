import merge from 'lodash.merge';

import light from './presets/light';
import dark from './presets/dark';
import black from './presets/black';
import white from './presets/white';

const presets = { light, dark, black, white };
export default class Theme {
  static load(name = 'dark', overrides) {
    const theme = presets[name] || presets.dark;

    return merge(theme, overrides);
  }
}

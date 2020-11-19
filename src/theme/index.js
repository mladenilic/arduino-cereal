import merge from 'lodash.merge';

import light from './presets/light';
import dark from './presets/dark';
import black from './presets/black';
import white from './presets/white';

const presets = { light, dark, black, white };
export default class Theme {
  static load(name, overrides) {
    return merge(presets[name] || presets.dark, overrides);
  }
}

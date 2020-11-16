import light from './presets/light';
import dark from './presets/dark';

const presets = { light, dark };
export default class Theme {
  static load(name = 'dark', overrides) {
    const theme = presets[name] || presets.dark;

    return Object.assign(theme, overrides);
  }
}

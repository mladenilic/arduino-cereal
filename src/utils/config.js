import path from 'path';
import fs from 'fs';

export default () => {
  const configPath = path.join(process.cwd(), './cereal.config.json');
  return fs.existsSync(configPath) ? require(configPath) : {};
};

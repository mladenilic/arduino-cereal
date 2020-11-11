const path = require('path');
const fs = require('fs');

const loadUserConfig = () => {
  const configPath = path.join(process.cwd(), './cereal.config.json');
  return fs.existsSync(configPath) ? require(configPath) : {};
};

module.exports = loadUserConfig;

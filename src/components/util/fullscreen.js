const {useEffect} = require('react');

const enterAltScreenCommand = '\\u1b[?1049h';
const leaveAltScreenCommand = '\\u1b[?1049l';

const exitFullScreen = () => {
  process.stdout.write(leaveAltScreenCommand);
};

const FullScreen = ({ children }) => {
  useEffect(() => exitFullScreen, []);
  process.stdout.write(enterAltScreenCommand);
  return children;
};

module.exports = FullScreen;

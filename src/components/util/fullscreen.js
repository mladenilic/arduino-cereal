const React = require('react');

const enterAltScreenCommand = '\x1b[?1049h';
const leaveAltScreenCommand = '\x1b[?1049l';

const exitFullScreen = () => {
  process.stdout.write(leaveAltScreenCommand);
};

const FullScreen = ({ children }) => {
  React.useEffect(() => {
    process.stdout.write(enterAltScreenCommand);

    return exitFullScreen;
  }, []);

  return children;
};

module.exports = FullScreen;

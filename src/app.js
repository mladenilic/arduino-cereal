'use strict';
const React = require('react');

const { Box } = require('ink');
const FullScreen = require('import-jsx')('./components/util/fullscreen');
const Header = require('import-jsx')('./components/header');
const Variables = require('import-jsx')('./components/variables');
const Monitor = require('import-jsx')('./components/monitor');

const { connect } = require('react-redux/lib/alternate-renderers');
const { setConfig } = require('./redux/actions/config');

const App = ({ config, setConfig }) => {
  React.useEffect(() => setConfig(config));

  return <FullScreen>
    <Box flexDirection="column" height={process.stdout.rows}>
      <Header/>
      <Box flexDirection="row" flexGrow={1}>
        <Variables/>
        <Monitor/>
      </Box>
    </Box>
  </FullScreen>
};

module.exports = connect(null, { setConfig })(App);

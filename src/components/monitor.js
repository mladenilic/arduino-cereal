'use strict';
const React = require('react');
const { Box, Text, Newline, Spacer, measureElement } = require('ink');

const { connect } = require('react-redux/lib/alternate-renderers');
const { setMessageCount } = require('../redux/actions/messages');

const Monitor = ({ messages, setMessageCount }) => {
  const ref = React.useRef();

	React.useEffect(() => {
		const { height } = measureElement(ref.current);

    setMessageCount(Math.max(height, 1));
	}, []);

  return <Box borderStyle="single" flexDirection="column" flexGrow={1} paddingX={1}>
    <Box justifyContent="flex-start"><Text>[<Text bold>Monitor</Text>]</Text></Box>
    <Box ref={ref} flexDirection="column" flexGrow={1}>
      <Spacer />
      <Text>
        {messages.map((message, index) => <Text key={index}>{message}{index === messages.length - 1 ? '' : <Newline/>}</Text>)}
      </Text>
    </Box>
  </Box>
};

module.exports = connect(
  (state) => ({ messages: state.messages.messages }),
  { setMessageCount }
)(Monitor);

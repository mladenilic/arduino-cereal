'use strict';
const React = require('react');
const { Box, Text, Newline, Spacer, measureElement } = require('ink');

const { connect } = require('react-redux/lib/alternate-renderers');
const { setMessageCount } = require('../redux/actions/messages');

const Monitor = ({ messages, setMessageCount }) => {
  const ref = React.useRef();

	React.useEffect(() => {
		const { height } = measureElement(ref.current);

    setMessageCount(Math.max(height - 2, 1));
	}, []);

  return <Box ref={ref} flexDirection="column" borderStyle="single" flexGrow={1} paddingX={1} paddingY={0}>
    <Spacer />
    <Text>
      {messages.map((message, index) => <Text key={index}>{message}{index === messages.length - 1 ? '' : <Newline/>}</Text>)}
    </Text>
  </Box>
};

module.exports = connect(
  (state) => ({ messages: state.messages.messages }),
  { setMessageCount }
)(Monitor);

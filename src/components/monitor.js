'use strict';
const React = require('react');
const { Newline, Spacer, measureElement } = require('ink');

const Box = require('import-jsx')('./base/box');
const Text = require('import-jsx')('./base/text');
const Heading = require('import-jsx')('./base/heading');

const { connect } = require('react-redux/lib/alternate-renderers');
const { setMessageCount } = require('../redux/actions/messages');

const Monitor = ({ config, messages, setMessageCount }) => {
  const ref = React.useRef();

	React.useEffect(() => {
		const { height } = measureElement(ref.current);
    setMessageCount(Math.max(height - 1, 1));
	}, []);

	const timestamp = (message) => config.monitor.timestamp ? <Text>[<Text>{message.time}</Text>] </Text> : null;

  return <Box boxRef={ref} borderStyle="single" flexDirection="column" flexGrow={1} paddingX={1}>
    <Heading>Monitor</Heading>
    <Box flexDirection="column" flexGrow={1}>
      <Spacer/>
      <Text>
        {messages.map((message, index) => {
          return <Text key={index}>
            {timestamp(message)}
            <Text>{message.text}</Text>
            {index === messages.length - 1 ? '' : <Newline/>}
          </Text>
        })}
      </Text>
    </Box>
  </Box>
};

module.exports = connect(
  (state) => ({
    config: state.config,
    messages: state.messages.messages
  }),
  { setMessageCount }
)(Monitor);

'use strict';

import React, { useEffect, useRef } from 'react';

import { Newline, Spacer, measureElement } from 'ink';

import Box from './base/box';
import Text from './base/text';
import Heading from './base/heading';

import { connect } from 'react-redux/lib/alternate-renderers';
import { setMessageCount } from '../redux/actions/messages';

const Monitor = ({ config, messages, setMessageCount }) => {
  const ref = useRef();

	useEffect(() => {
		const { height } = measureElement(ref.current);
    setMessageCount(Math.max(height, 1));
	}, []);

	const timestamp = (message) => config.monitor.timestamp ? <Text>[<Text>{message.time}</Text>] </Text> : null;

  return <Box borderStyle="single" flexDirection="column" flexGrow={1} paddingX={1}>
    <Heading>Monitor</Heading>
    <Box boxRef={ref} flexDirection="column" flexGrow={1}>
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

export default connect(
  (state) => ({
    config: state.config,
    messages: state.messages.messages
  }),
  { setMessageCount }
)(Monitor);

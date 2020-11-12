'use strict';

import React, { useEffect, useRef } from 'react';

import { Newline, Spacer, measureElement } from 'ink';

import Box from './base/box';
import Text from './base/text';
import Heading from './base/heading';
import Timestamp from './monitor/timestamp';

import { connect } from 'react-redux/lib/alternate-renderers';
import { setMessageCount } from '../redux/actions/messages';

const Monitor = ({ messages, setMessageCount }) => {
  const ref = useRef();

	useEffect(() => {
		const { height } = measureElement(ref.current);
    setMessageCount(Math.max(height, 1));
	}, []);

  return <Box borderStyle="single" flexDirection="column" flexGrow={1} paddingX={1}>
    <Heading>Monitor</Heading>
    <Box boxRef={ref} flexDirection="column" flexGrow={1}>
      <Spacer/>
      <Text>
        {messages.map((message, index) => (
          <Text key={index}>
            <Timestamp time={message.time} />
            <Text>{message.text}</Text>
            {index === messages.length - 1 ? '' : <Newline/>}
          </Text>
        ))}
      </Text>
    </Box>
  </Box>
};

export default connect(
  (state) => ({
    messages: state.messages.messages
  }),
  { setMessageCount }
)(Monitor);

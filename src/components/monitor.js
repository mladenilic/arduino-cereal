'use strict';
const React = require('react');
const { Box, Text, Newline, Spacer } = require('ink');

const Monitor = () => {
  return <Box flexDirection="column" borderStyle="single" flexGrow={3} marginLeft={0.5} paddingX={0} paddingY={0}>
    <Spacer />
    <Text>
      > Sample monitor line 1
      <Newline/>
      > Sample monitor line 2
      <Newline/>
      > Sample monitor line 3
      <Newline/>
      > Sample monitor line 4
      <Newline/>
      > Sample monitor line 5
    </Text>
  </Box>
};

module.exports = Monitor;

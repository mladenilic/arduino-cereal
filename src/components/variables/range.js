import React from 'react';

import Box from '../base/box';
import Text from '../base/text';
import {connect} from "react-redux/lib/alternate-renderers";

const clamp = (x, min, max) => Math.min(Math.max(x, min), max);

const Range = ({ name, variable, characters, colors }) => {
  const length = 20;
  const [min, max] = variable.options.map(a => parseFloat(a));
  const value = parseFloat(variable.value);

  const completed = Math.round(length * value / (max - min));

  return <Box flexDirection="row">
    <Text>{name}: </Text>
    <Text width={length}>
      <Text>{min}|</Text>
      <Text color={colors.fill}>{(characters.fill || '▇').repeat(clamp(completed, 0, length))}</Text>
      <Text color={colors.empty}>{(characters.empty || '-').repeat(clamp(length - completed, 0, length))}</Text>
      <Text>|{max}</Text>
    </Text>
    <Text> ({value})</Text>
  </Box>
};

export default connect(
  (state) => ({
    characters: state.config?.theme?.modules?.variables?.range || {},
    colors: state.config?.theme?.colors?.variables?.range || {},
  }),
)(Range);

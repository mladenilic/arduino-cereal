import React from 'react';

import Text from '../../base/text';
import Box from '../../base/box';
import { connect } from 'react-redux/lib/alternate-renderers';

const clamp = (x, min, max) => Math.min(Math.max(x, min), max);

const Gauge = ({ value, min, max, length = 20, characters, colors }) => {
  const completed = Math.round(length * value / (max - min));

  return (
    <Box>
      <Text>{min}|</Text>
      <Text color={colors.fill}>{(characters.fill || '▇').repeat(clamp(completed, 0, length))}</Text>
      <Text color={colors.empty}>{(characters.empty || '-').repeat(clamp(length - completed, 0, length))}</Text>
      <Text>|{max}</Text>
    </Box>
  );
};

export default connect(
  state => ({
    characters: state.config?.theme?.modules?.variables?.range || {},
    colors: state.config?.theme?.colors?.variables?.range || {}
  })
)(Gauge);


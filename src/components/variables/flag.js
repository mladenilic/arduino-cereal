import React from 'react';

import Box from '../base/box';
import Text from '../base/text';
import { connect } from "react-redux/lib/alternate-renderers";

const Flag = ({ name, variable, characters, colors }) => {
  const value = parseInt(variable.value);

  return <Box flexDirection="row">
    <Text>{name}: </Text>
    <Text>
      { value ?
        <Text>[<Text color={colors.on}>{(characters.on || '▣')}</Text>] HIGH</Text> :
        <Text>[<Text color={colors.on}>{(characters.off || '▢')}</Text>] LOW</Text>
      }
    </Text>
  </Box>
};

export default connect(
  (state) => ({
    characters: state.config?.theme?.modules?.variables?.flag || {},
    colors: state.config?.theme?.colors?.variables?.flag || {},
  }),
)(Flag);

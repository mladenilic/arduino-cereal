import React from 'react';

import Box from '../base/box';
import Text from '../base/text';
import VariableName from './base/name';
import VariableValue from './base/value';

import { connect } from 'react-redux/lib/alternate-renderers';

const Flag = ({ name, variable, characters, colors }) => {
  const value = parseInt(variable.value);

  return <Box flexDirection="row">
    <VariableName name={name} />
    <Text>
      { value ?
        <Text>[<Text color={colors.on}>{(characters.on || '▣')}</Text>] <VariableValue value="HIGH"/></Text> :
        <Text>[<Text color={colors.on}>{(characters.off || '▢')}</Text>] <VariableValue value="LOW"/></Text>
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

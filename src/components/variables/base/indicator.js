import React from 'react';

import Text from '../../base/text';
import { connect } from 'react-redux/lib/alternate-renderers';

const Indicator = ({ value, colors, characters }) => (
  <Text>[<Text color={value ? colors.on : colors.off}>{value ? characters.on : characters.off}</Text>] </Text>
);

export default connect(
  state => ({
    characters: state.config?.theme?.modules?.variables?.flag || {},
    colors: state.config?.theme?.colors?.variables?.flag || {}
  })
)(Indicator);


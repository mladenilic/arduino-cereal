import React from 'react';
import Text from '../base/text';
import {connect} from "react-redux/lib/alternate-renderers";

const Direction = ({ sent, characters, colors }) => sent ?
  <Text color={colors.sent}> {characters.sent} </Text> :
  <Text color={colors.received}> {characters.received} </Text>;

export default connect(
  state => ({
    characters: state.config?.theme?.modules?.monitor?.direction || {},
    colors: state.config.theme?.colors?.monitor?.direction || {}
  })
)(Direction);

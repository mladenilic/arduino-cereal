import React, { useState, useCallback } from 'react';

import { useInput } from 'ink';

import Box from './base/box';
import Text from './base/text';

const Input = ({ onInput }) => {
  const [value, setValue] = useState('');
  const postValue = useCallback((value) => {
    if (!onInput || value.length === 0) {
      return;
    }

    setValue('');
    onInput(value);
  }, [onInput]);

  useInput((input, key) => {
    if (key.return) {
      return postValue(value);
    }

    if (key.backspace || key.delete) {
      return setValue(value.slice(0, -1));
    }

    setValue(value + input);
	});

  return (
    <Box paddingX={1} borderStyle="single">
      <Text>$> <Text>{value}</Text></Text>
    </Box>
  );
};

export default Input;

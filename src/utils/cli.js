'use strict';

import meow from 'meow';

export default meow(`
  Usage
    $ arduino-cereal

  Options
    --port  Serial port
    --baud  Baud rate (default: 9600)
`);

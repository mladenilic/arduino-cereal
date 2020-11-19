'use strict';

import meow from 'meow';

export default meow(`
  Usage
    $ arduino-cereal

  Options
    --port   Serial port
    --baud   Baud rate (default: 9600)
    --theme  Theme name (light, dark, black, white)
    --fps    Screen render rate (default: 15)
`);

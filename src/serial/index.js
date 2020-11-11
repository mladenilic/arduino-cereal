const { EventEmitter } = require('events');

const SerialPort = require('serialport');
const CerealParser = require('./parser');

class Serial extends EventEmitter {
  constructor(stream) {
    super();

    this.stream = stream;

    this.stream.pipe(new CerealParser())
      .on('open', () => this.emit('connected'))
      .on('error', (e) => this.emit('error', e))
      .on('data', data => this.emit(data.variable ? 'variable' : 'message', data.value));
  }

  static connect(port, baud) {
     return new this(new SerialPort(port, { baudRate: baud }));
  }
}

module.exports = Serial;

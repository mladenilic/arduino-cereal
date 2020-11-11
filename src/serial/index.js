const EventEmitter = require('events');

const SerialPort = require('serialport');
const CerealParser = require('./parser');

class Serial extends EventEmitter {
  constructor(stream) {
    super();

    this.stream = stream;
    this.stream.pipe(new CerealParser()).on('data', this._data.bind(this));
    this.stream.open(this._open.bind(this));
  }

  _open(error) {
    error === null ? this.emit('connect') : this.emit('error', error);
  }

  _data(data) {
    this.emit(data.variable ? 'variable' : 'message', data.value);
  }

  static connect(port, baud) {
     return new this(new SerialPort(port, { baudRate: baud, autoOpen: false }));
  }
}

module.exports = Serial;
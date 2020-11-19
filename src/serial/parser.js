import { Transform } from 'stream';

export default class CerealParser extends Transform {
  constructor(options = {}) {
    options.objectMode = true;

    super(options);

    this.delimiter = Buffer.from('c0', 'hex');
    this.valueDelimiter = Buffer.from('c1', 'hex');
    this.buffer = Buffer.alloc(0);
    this.varaible = false;
  }

  _transform(chunk, encoding, cb) {
    this.buffer = Buffer.concat([this.buffer, chunk]);

    let position;
    while ((position = this.buffer.indexOf(this.delimiter)) !== -1) {
      const value = this.buffer.slice(0, position).toString('utf-8');
      if (value.length > 0) {
        this.push({
          variable: this.varaible,
          value: this.varaible ? value.split(this.valueDelimiter) : value
        });
      }

      this.varaible = !this.varaible;
      this.buffer = this.buffer.slice(position + this.delimiter.length);
    }

    if (!this.varaible) {
      this._flushBuffer();
    }

    cb();
  }

  _flush(cb) {
    this._flushBuffer();
    cb();
  }

  _flushBuffer() {
    this.push({ variable: false, value: this.buffer.toString('utf-8') });
    this.buffer = Buffer.alloc(0);
  }
}

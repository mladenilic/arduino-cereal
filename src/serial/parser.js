const { Transform } = require('stream');

class CerealParser extends Transform {
  constructor(options = {}) {
    options.objectMode = true;

    super(options);

    this.delimiter = Buffer.from('c0', 'hex');
    this.valueDelimiter = Buffer.from('c1', 'hex');
    this.buffer = Buffer.alloc(0);
    this.varaible = false;
  }

  _transform(chunk, encoding, cb) {
    if (this.varaible === false && chunk.indexOf(this.delimiter) === -1) {
      this.push({ variable: false, value: chunk.toString('utf-8') });
      cb();

      return;
    }

    let data = Buffer.concat([this.buffer, chunk]);

    let position;
    while ((position = data.indexOf(this.delimiter)) !== -1) {
      let value = data.slice(0, position).toString('utf-8');
      if (this.varaible) {
        value = value.split(this.valueDelimiter, 2);
      }

      this.push({ variable: this.varaible, value: value });
      this.varaible = !this.varaible;

      data = data.slice(position + this.delimiter.length);
    }

    this.buffer = data;
    cb()
  }

  _flush(cb) {
    this.push(this.buffer);
    this.buffer = Buffer.alloc(0);
    cb()
  }
}

module.exports = CerealParser;

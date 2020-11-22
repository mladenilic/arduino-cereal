#ifndef _CEREAL_STREAM_H_
#define _CEREAL_STREAM_H_

#include "Arduino.h"

#define MESSAGE_START     "\xc0"
#define MESSAGE_END       "\xc0"
#define VARIABLE_DELIMTER "\xc1"

class CerealStream: public Print {
  public:
    CerealStream(Print* stream);

    size_t variable(const char *name, char value);
    size_t variable(const char *name, unsigned char value);
    size_t variable(const char *name, int value);
    size_t variable(const char *name, unsigned int value);
    size_t variable(const char *name, long value);
    size_t variable(const char *name, unsigned long value);
    size_t variable(const char *name, double value);

    size_t range(const char *name, char value, char from, char to);
    size_t range(const char *name, unsigned char value, unsigned char from, unsigned char to);
    size_t range(const char *name, int value, int from, int to);
    size_t range(const char *name, unsigned int value, unsigned int from, unsigned int to);
    size_t range(const char *name, long value, long from, long to);
    size_t range(const char *name, unsigned long value, unsigned long from, unsigned long to);
    size_t range(const char *name, double value, double from, double to);

    size_t flag(const char *name, unsigned int value);

    size_t digital(const char *name, unsigned int value);
    size_t analog(const char *name, int value);
  private:
    enum Type {
      VARIABLE = 0x00,
      RANGE    = 0x01,
      FLAG     = 0x02
    };

    Print* stream;

    using Print::write;

    size_t start() { return print(MESSAGE_START); }
    size_t start(Type type) { return start() + t(type) + d(); }
    size_t end() { return print(MESSAGE_END); }
    size_t t(Type type) { return print(type); }
    size_t d() { return print(VARIABLE_DELIMTER); }
    size_t write(uint8_t c) { return stream->write(c); }
};

#endif _CEREAL_STREAM_H_

#ifndef _ARDUINO_CEREAL_H_
#define _ARDUINO_CEREAL_H_

#include "Arduino.h"

#define MESSAGE_START     "\xc0"
#define MESSAGE_END       "\xc0"
#define VARIABLE_DELIMTER "\xc1"

class ArduinoCereal: public Print {
  public:
    size_t variable(const char *name, char value);
    size_t variable(const char *name, unsigned char value);
    size_t variable(const char *name, int value);
    size_t variable(const char *name, unsigned int value);
    size_t variable(const char *name, long value);
    size_t variable(const char *name, unsigned long value);
    size_t variable(const char *name, double value);

  private:
    using Print::write;

    size_t start() { return print(MESSAGE_START); }
    size_t end() { return print(MESSAGE_END); }
    size_t d() { return print(VARIABLE_DELIMTER); }
    size_t write(uint8_t c) { return Serial.write(c); }
};

#endif _ARDUINO_CEREAL_H_

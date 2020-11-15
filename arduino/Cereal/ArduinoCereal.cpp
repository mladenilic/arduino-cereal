#include "ArduinoCereal.h"

#define _CEREAL_PRINT_VARIABLE(name, value) start(Type::VARIABLE) + print(name) + d() + print(value) + end();
#define _CEREAL_PRINT_RANGE(name, value, from, to) \
  start(Type::RANGE) + print(name) + d()           \
  + print(value) + d()                             \
  + print(from) + d()                              \
  + print(to) + end();                             \

size_t ArduinoCereal::variable(const char *name, char value) {
  return _CEREAL_PRINT_VARIABLE(name, value);
}

size_t ArduinoCereal::variable(const char *name, unsigned char value) {
  return variable(name, (unsigned long) value);
}

size_t ArduinoCereal::variable(const char *name, int value) {
  return variable(name, (long) value);
}

size_t ArduinoCereal::variable(const char *name, unsigned int value) {
  return variable(name, (unsigned long) value);
}

size_t ArduinoCereal::variable(const char *name, long value) {
  return _CEREAL_PRINT_VARIABLE(name, value);
}

size_t ArduinoCereal::variable(const char *name, unsigned long value) {
  return _CEREAL_PRINT_VARIABLE(name, value);
}

size_t ArduinoCereal::variable(const char *name, double value) {
  return _CEREAL_PRINT_VARIABLE(name, value);
}

size_t ArduinoCereal::range(const char *name, char value, char from, char to) {
  return range(name, (long) value, (long) from, (long) to);
}

size_t ArduinoCereal::range(const char *name, unsigned char value, unsigned char from, unsigned char to) {
  return range(name, (unsigned long) value, (unsigned long) from, (unsigned long) to);
}

size_t ArduinoCereal::range(const char *name, int value, int from, int to) {
  return range(name, (long) value, (long) from, (long) to);
}

size_t ArduinoCereal::range(const char *name, unsigned int value, unsigned int from, unsigned int to) {
  return range(name, (unsigned long) value, (unsigned long) from, (unsigned long) to);
}

size_t ArduinoCereal::range(const char *name, long value, long from, long to) {
  return _CEREAL_PRINT_RANGE(name, value, from, to);
}

size_t ArduinoCereal::range(const char *name, unsigned long value, unsigned long from, unsigned long to) {
  return _CEREAL_PRINT_RANGE(name, value, from, to);
}

size_t ArduinoCereal::range(const char *name, double value, double from, double to) {
  return _CEREAL_PRINT_RANGE(name, value, from, to);
}

size_t ArduinoCereal::analog(const char *name, int value) {
  return range(name, (long) value, (long) 0, (long) 1023);
}

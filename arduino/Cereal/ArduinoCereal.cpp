#include "ArduinoCereal.h"

size_t ArduinoCereal::variable(const char *name, char value) {
  return start(Type::VARIABLE) + print(name) + d() + print(value) + end();
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
  return start(Type::VARIABLE) + print(name) + d() + print(value) + end();
}

size_t ArduinoCereal::variable(const char *name, unsigned long value) {
  return start(Type::VARIABLE) + print(name) + d() + print(value) + end();
}

size_t ArduinoCereal::variable(const char *name, double value) {
  return start(Type::VARIABLE) + print(name) + d() + print(value) + end();
}

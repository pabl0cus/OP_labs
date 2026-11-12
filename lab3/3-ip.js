'use strict';

function ipToInt(ip = '127.0.0.1') {
  const bytes = ip.split('.').map(Number);
  return bytes.reduce((number, byte) => (number << 8) | byte, 0);
}

module.exports = { ipToInt };

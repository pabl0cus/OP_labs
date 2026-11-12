'use strict';

function methods(iface) {
  const result = [];
  for (const name in iface) {
    if (typeof iface[name] === 'function') {
      result.push([name, iface[name].length]);
    }
  }
  return result;
}

module.exports = { methods };

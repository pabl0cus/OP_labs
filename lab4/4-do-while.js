'use strict';

function sum(...args) {
  let res = 0;
  let i = 0;
  if (!args.length) return 0;
  do {
    res += args[i++];
  } while (i < args.length);
  return res;
}

module.exports = { sum };

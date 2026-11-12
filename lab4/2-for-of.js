'use strict';

function sum(...args) {
  let result = 0;
  for (const number of args) {
    result += number;
  }
  return result;
}

module.exports = { sum };

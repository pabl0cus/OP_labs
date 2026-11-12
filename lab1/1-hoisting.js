'use strict';

function fn() {
  console.log(value);
  var value = 42;
  console.log(value);
}

module.exports = { fn };

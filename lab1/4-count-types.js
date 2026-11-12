'use strict';

const values = [true, 'слово', 5, -12, false, 'Київ', null, undefined, { a: 1 }, [1, 2]];

function countWithKnownTypes(items) {
  const counts = { boolean: 0, string: 0, number: 0, object: 0, undefined: 0 };
  for (const item of items) {
    counts[typeof item] += 1;
  }
  return counts;
}

function countTypesInArray(items) {
  const counts = {};
  for (const item of items) {
    const type = typeof item;
    counts[type] = (counts[type] || 0) + 1;
  }
  return counts;
}

module.exports = { values, countWithKnownTypes, countTypesInArray };

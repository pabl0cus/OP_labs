'use strict';

function max(matrix) {
  let largest = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > largest) largest = matrix[i][j];
    }
  }
  return largest;
}

module.exports = { max };

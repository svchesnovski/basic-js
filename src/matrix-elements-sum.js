const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */

let matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

function getMatrixElementsSum(matrix) {
  let sumMatrixElements = 0;
  for (let f = 0; f < matrix[0].length; f++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][f] === 0) {
        break;
      }
      sumMatrixElements += matrix[i][f];
    }
  }
return sumMatrixElements;
}

let sumMatrixElements = getMatrixElementsSum(matrix);
console.log(`Сумма элементов матрицы: ${sumMatrixElements}`);

module.exports = {
  getMatrixElementsSum,
};

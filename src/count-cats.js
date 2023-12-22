const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

let matrix = [
  [0, 1, "^^"],
  [0, "^^", 2],
  ["^^", 1, 2],
];

function countCats(matrix) {
let catsEars = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let f = 0; f < matrix[i].length; f++) {
    if (matrix[i][f] === "^^") {
      catsEars++;
    }
  }
}
return catsEars;
}

let catsEars = countCats(matrix);
console.log(`Найдено кошачьих ушей: ${catsEars}`);

module.exports = {
  countCats
};

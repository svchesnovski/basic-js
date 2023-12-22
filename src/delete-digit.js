const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
let n = 152;

function deleteDigit(n) {
  let string = n.toString(); 
  let digitMax = 0;
  for (let i = 0; i < string.length; i++) {
    let tempVar = string.slice(0, i) + string.slice(i + 1);
    let number = parseInt(tempVar, 10);
    if (number > digitMax) {
      digitMax = number;
    }
  }
  return digitMax;
}

let maxNumber = deleteDigit(n);
console.log(`Максимальное число после преобразования: ${maxNumber}`);

module.exports = {
  deleteDigit
};

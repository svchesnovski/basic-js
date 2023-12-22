const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

let arr = [-1, 150, 190, 170, -1, -1, 160, 180];

function sortByHeight(arr) {
  let sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      sortedArr.push(arr[i]);
    }
  }
  sortedArr.sort((a, b) => a - b);
  let result = [];
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      result.push(-1);
    } else {
      result.push(sortedArr[index]);
      index++;
    }
  }
  return result;
}

let sortedByHeight = sortByHeight(arr);
console.log(`Сортировано по высоте: ${sortedByHeight}`);

module.exports = {
  sortByHeight
};

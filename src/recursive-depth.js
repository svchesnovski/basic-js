const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

let arr = [1, 2, 3, [4, 5]];
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let arrDepth = 0;
    for (let i = 0; i < arr.length; i++) {
      arrDepth = Math.max(this.calculateDepth(arr[i]), arrDepth);
    }
    return arrDepth + 1;
  }
}

const сalculateDpt = new DepthCalculator();

let getDepth = сalculateDpt.calculateDepth(arr);

console.log(`Глубина массива: ${getDepth}`);

module.exports = {
  DepthCalculator
};

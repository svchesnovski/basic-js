const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

let str = "aabbbc";

function encodeLine(str) {
  let encodeString = "";
  let repeatCounter = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      repeatCounter++;
    } else {
      encodeString += repeatCounter > 1 ? repeatCounter + str[i] : str[i];
      repeatCounter = 1;
    }
  }
  return encodeString;
}

let encodedStr = encodeLine(str);
console.log(`Закодированная строка: ${encodedStr}`);

module.exports = {
  encodeLine
};

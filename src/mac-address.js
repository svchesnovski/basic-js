const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */

let n = "00-1B-63-84-45-E6";

function isMAC48Address(n) {
    const checkMac = /^([0-9A-Fa-f]{2}-){5}[0-9A-Fa-f]{2}$/;
    return checkMac.test(n);
}

let macAddress = isMAC48Address(n);
console.log(`Этот адрес MAC: ${n} : ${macAddress}`);

module.exports = {
  isMAC48Address
};

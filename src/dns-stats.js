const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

let domains = [
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru',
]

function getDNSStats(domains) {
  let dnsCounter = {};

  for (let i = 0; i < domains.length; i++) {
    let seporatedDomain = domains[i].split(".").reverse();
    let subdomain = "";

    for (let j = 0; j < seporatedDomain.length; j++) {
      subdomain = subdomain + "." + seporatedDomain[j];

      if (dnsCounter[subdomain] === undefined) {
        dnsCounter[subdomain] = 1;
      } else {
        dnsCounter[subdomain]++;
      }
    }
  }

  return dnsCounter;
}

let showDomains = getDNSStats(domains);
console.log(`Найденные домены: ${showDomains}`);

module.exports = {
  getDNSStats
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
let email = "prettyandsimple@example.com";

function getEmailDomain(email) {
  let separate = email.split("@");
  return separate[separate.length - 1];
}

let emailDomain = getEmailDomain(email);
console.log(`Доменное имя: ${emailDomain}`);

module.exports = {
  getEmailDomain
};

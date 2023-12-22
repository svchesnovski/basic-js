const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
let members = ["Olivia", 1111, "Lily", "Oscar", true, null];

function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let namesLetters = members
    .filter(function (item) {
      return typeof item === "string";
    })
    .map(function (item) {
      return item.trim()[0].toUpperCase();
    })
    .sort();

  return namesLetters.join("");
}

let dreamTeam = createDreamTeam(members);
console.log(`Команда мечты: ${dreamTeam}`);

module.exports = {
  createDreamTeam
};

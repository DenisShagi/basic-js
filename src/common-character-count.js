const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let charMap = new Map();
  let counter = 0;

  for (let char of s2) {
    if (charMap.has(char)) {
      charMap.set(char, charMap.get(char) + 1);
    } else {
      charMap.set(char, 1);
    }
  }
  for (let char of s1) {
    if (charMap.has(char) && charMap.get(char) !== 0) {
      counter++;
      console.log(charMap.set(char, charMap.get(char) - 1));
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount,
};

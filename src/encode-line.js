const { NotImplementedError } = require("../extensions/index.js");

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
function encodeLine(str) {
  let encoded = "";
  let count = 0;
  let currentChar;

  for (let char of str) {
    if (char === currentChar) {
      count++;
    } else {
      if (currentChar) {
        encoded += (count > 1 ? count : "") + currentChar;
      }
      currentChar = char;
      count = 1;
    }
  }
  if (currentChar) {
    encoded += (count > 1 ? count : "") + currentChar;
  }

  return encoded;
}

module.exports = {
  encodeLine,
};

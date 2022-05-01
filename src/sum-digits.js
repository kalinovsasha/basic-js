const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n=0 ) {
  let buf=n.toString()
  buf=buf.split(``);
  buf=buf.reduce((sum, current) => Number(sum) + Number(current), 0)
  if(buf>9){
    return getSumOfDigits(buf)
  }else return Number(buf)
}

console.log(getSumOfDigits(1236))
module.exports = {
  getSumOfDigits
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

 let a=[
  [0, 1, '^^'],
  [0, '^^', 2],
  ['^^', 1, 2],null
  ]
function countCats(arr=[]) {
  //throw new NotImplementedError('Not implemented');
  let len =arr.length
  let count=0;
  for(let i=0;i<len;i++){
    if(Array.isArray(arr[i])){
       count+=arr[i].reduce((sum, current) => (current=='^^')? sum+1:sum, 0)
    }
  }
  console.log(count);
  return count

}
countCats(a);
module.exports = {
  countCats
};

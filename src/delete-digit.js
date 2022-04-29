const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let num;
  let buf=[];
  let result;
  let max = undefined;
  num=n.toString()
  num=num.split("");
  for(let i=0;i<num.length; i++){
    buf= [...num];
    buf.splice(i,1)
    if(!max){
      max=Number(buf.join(""))
    }else{
      max=max>Number(buf.join(""))?max:Number(buf.join(""));
    }
  }
  return max
}

deleteDigit(1001)
module.exports = {
  deleteDigit
};

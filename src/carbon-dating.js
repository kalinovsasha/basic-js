const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(activity) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(typeof(activity)!=`string`){
    return false
  }
  activity= Number(activity)
  if( activity<15 && activity>0){
    let date;
    const k = 0.693/5730;
    date= Math.ceil(Math.log(15/activity)/k);
    return date
  }
  return false
  
}
console.log(dateSample(13308)) 

module.exports = {
  dateSample
};

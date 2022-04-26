const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  //let date = new Date("03.01.2021")
  if(date==null || date==undefined){
    return "Unable to determine the time of year!"
  }
  if(date=="Invalid Date"){
    throw new Error('Invalid date!')
  }
  if(Number(date.getMonth()==1 && date.toString().includes('Mar'))){
    throw new Error('Invalid date!')
  }
  console.log(date.toISOString())
  console.log(`date ${date.toString()} month ${Number(date.getMonth())}`)
 
  date=Number(date.getMonth())
  if(date>=0 && date<=1){
    return "winter"
  }
  if(date>=2 && date<=4){
    return "spring"
  }
  if(date>=5 && date<=7){
    return "summer"
  }
  if(date>=8 && date<=10){
    return "autumn"
  }
  if(date==11){
    return "winter"
  }
  
  return date
}

let test=new Date(`2.30.2021`)
console.log(getSeason(test))

module.exports = {
  getSeason
};

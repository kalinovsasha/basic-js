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
  if(date===undefined){
    return 'Unable to determine the time of year!'
  }
  let test
  try {
    test=Number(date.getMonth())
  } catch (error) {
    throw new Error('Invalid date!') 
  } 
  if(date=="Invalid Date"){
    throw new Error('Invalid date!')
  }
 
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
  
}

//let test=new Date(`2.30.2021`)
//console.log(getSeason())

module.exports = {
  getSeason
};

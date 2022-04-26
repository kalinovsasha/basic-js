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
function createDreamTeam(members=[]) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(Array.isArray(members)==false){return false}
  let buffer=[];
    for (let key in members) {
      if(typeof(members[key])=="string"){
        for(let i=0;i<members[key].length;i++){
          if(members[key][i]!=" "){
            buffer.push(members[key][i].toUpperCase())
            break
          }
        }
      }
    }
  if(buffer.length<1){return false}
  buffer = buffer.sort().join(""); 
  return buffer

}

console.log(createDreamTeam([
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
]))
module.exports = {
  createDreamTeam
};

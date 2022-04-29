const { NotImplementedError } = require('../extensions/index.js');


function getCommonCharacterCount( s1, s2 ) {
  //throw new NotImplementedError('Not implemented');
  if(typeof(s1)!=`string` ||typeof(s2)!=`string` ){
    throw new NotImplementedError('Not implemented');
  }
  let counter=0;
  s1=s1.split(``);
  s2=s2.split(``);
  let buf= new Set;
  let s1Obj={};
  let s2Obj={};
  for(i in s1){
    if(s2.includes(s1[i])){
      buf.add(s1[i])
    }
  }
  for(i in s1){
    if(buf.has(s1[i]))   {
      s1Obj[s1[i]]=s1Obj[s1[i]]>=0?s1Obj[s1[i]]+1:1;
    }
  }
  for(i in s2){
    if(buf.has(s2[i]))   {
      s2Obj[s2[i]]=s2Obj[s2[i]]>=0?s2Obj[s2[i]]+1:1;
    }
  }
  for(i in s1Obj){
    counter+=s1Obj[i]<=s2Obj[i]?s1Obj[i]:s2Obj[i];
  }
  return counter
}

//console.log(getCommonCharacterCount(`aabcc`,`adcaa`))
//console.log(getCommonCharacterCount('abca', 'xyzbac'))

module.exports = {
  getCommonCharacterCount
};

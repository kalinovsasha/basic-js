const { NotImplementedError } = require('../extensions/index.js');


function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }
  let buf=[...arr]

    for(let i in buf){
      if(buf[i]=='--discard-prev'){
        if(buf[Number(i)-1]){
        buf.splice(i-1,2);
        } else buf.splice(i,1);
      }
      if(buf[i]=='--double-prev'){
        if(buf[Number(i)-1]){
        buf.splice(i-1,2,buf[i-1],buf[i-1]);
        } else buf.splice(i,1);
      }
      if(buf[i]=='--discard-next'){
        if(buf[Number(i)+1]){
        buf.splice(i,2);
        } else buf.splice(i,1);
      }
      if(buf[i]=='--double-next'){
        if(buf[Number(i)+1]){
        buf.splice(i,2,buf[i+1],buf[i+1]);
        } else buf.splice(i,1);
      }     
    } 
   /*
    while(buf.includes(`--double-prev`)){
      buf.splice(buf.indexOf(`--double-prev`),1);
    }
    while(buf.includes(`--discard-prev`)){
      buf.splice(buf.indexOf(`--discard-prev`),1);
    }
    while(buf.includes(`--double-next`)){
      buf.splice(buf.indexOf(`--double-next`),1);
    }
    while(buf.includes(`--discard-next`)){
      buf.splice(buf.indexOf(`--discard-next`),1);
    } 
    */
  return buf

}

//console.log(transform([`--double-prev`, 1, 2, 3]))
//console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
//console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])),
module.exports = {
  transform
};

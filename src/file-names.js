const { NotImplementedError } = require('../extensions/index.js');


function renameFiles(names=[]) {
  result=[];
  let counter=0;  
  
  function compare(file){
    counter++;
    ///////Если нету одинаковых первый проход
    if(counter==1){
      if(result.indexOf(file)==-1){
        result.push(`${file}`)
        counter=0;
        return;
      } 
    }
    ///////Второй и последующие вызовы
    if(result.indexOf(`${file}(${counter})`)==-1){
      result.push(`${file}(${counter})`);
      counter=0;
      return
    } else {
      compare(file)
    } 
  }
  for(i in names){
    compare(names[i])
  }
  return result
}

console.log( renameFiles([`d`,`d`,`d(1)`]));
console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']))
//['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']);
module.exports = {
  renameFiles
};

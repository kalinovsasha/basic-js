const { NotImplementedError } = require('../extensions/index.js');

function repeater(str,{}) 
  {
  let modernStr;
  let buffer=[];
  let separatorBuffer=[];
  let separatorStr="";
  let options={
    repeatTimes: 1,
    separator : "+",
    addition :"",
    additionRepeatTimes :1,
    additionSeparator : "|"
    };

    for (let key in arguments[1]) {
      options[key]=arguments[1][key]
    }
    switch (str) {
      case null:
        str='null'
        break;
      case undefined:
        str=`undefined`
        break;
    }
    str=str.toString();
    try {
      options.addition=options.addition.toString()
    } catch (error) {
    }
    for(let k=0;k<options.additionRepeatTimes;k++){
      separatorBuffer.push(`${options.addition}`)
    }
    separatorStr=separatorBuffer.join(`${options.additionSeparator}`);
    for (let i=0;i<options.repeatTimes;i++){
        buffer.push(`${str}${separatorStr}`)
    }
  modernStr=buffer.join(`${options.separator}`)
  return modernStr
}






//console.log(repeater('STRING', { repeatTimes: 3, addition: '11', additionRepeatTimes: 0, additionSeparator: '--' }))
console.log(repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' }))
module.exports = {
  repeater
};




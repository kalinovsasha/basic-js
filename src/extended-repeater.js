const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options={
  repeatTimes: 1,
  separator : "+",
  addition :"",
  additionRepeatTimes :1,
  additionSeparator : "|"
  }) 
  {
  let modernStr;
  let buffer=[];
  let separatorBuffer=[];
  let separatorStr="";

  if(options.separator==undefined){
    options.separator="+"
  }
  if(options.additionSeparator==undefined){
    options.additionSeparator="|"
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
    console.log(separatorStr)
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

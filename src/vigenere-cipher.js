const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
    constructor(x){
      this.mes;
      this.key;
      this.mesCodes=[];
      this.keyCodes=[];
      if(x==undefined){
        this.direction=true
      } else this.direction= Boolean(x)
    }
  encrypt(mes,key) {
    if(!mes || !key){
      throw new Error(`Incorrect arguments!`)
    }
    this.message=mes.toUpperCase().split(``);
    this.key=key.toUpperCase().split(``);
    let counter=0;
    for(let i in this.message){
      this.mesCodes[i]=this.message[i].charCodeAt(0);
      this.keyCodes[i]=this.key[counter].charCodeAt(0);
      if(counter<this.key.length-1){
        counter++;
      } else counter=0
    }
    console.log(this.mesCodes+`key `+ this.keyCodes)
  }
  decrypt(mes,key) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

let test =new VigenereCipheringMachine()

test.encrypt(`xyz`,`ABCDEFG`)
console.log(String.fromCharCode(88))

module.exports = {
  VigenereCipheringMachine
};

// X=65+(N-65)+(key-65)
//A-65 Z-90
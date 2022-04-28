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
    constructor(x=true){
      this.mes;
      this.key;
      this.mesCodes=[];
      this.keyCodes=[];
      this.decr=[];
      this.encr=[];
      this.direction= Boolean(x)
    }
  encrypt(mes,key) {
      this.mesCodes=[];
      this.keyCodes=[];
      this.decr=[];
      this.encr=[];
    if(!mes || !key){
      throw new Error(`Incorrect arguments!`)
    }
    this.message=mes.toUpperCase().split(``);
    this.key=key.toUpperCase().split(``);
    let counter=0;
    //Get ASCI - 65 codes
    for(let i in this.message){
      this.mesCodes[i]=this.message[i].charCodeAt(0)-65;
      this.keyCodes[i]=this.key[counter].charCodeAt(0)-65;
      //array of keys
      if(counter<this.key.length-1){
        counter++;
      } else counter=0
    }

    //////////////////
    let counter2=0;
    for(let i=0;i< this.mesCodes.length; i++){
      if(this.mesCodes[i]>26 ||this.mesCodes[i]<0 ){
        this.encr[i]=String.fromCharCode(this.mesCodes[i]+65)
      }else{
        this.encr[i]=String.fromCharCode((this.mesCodes[i]+this.keyCodes[counter2])%26+65);
        counter2++; //чтобы не учитывались пробелы , спецсимволы и цифры
      }
    }
    console.log(this.encr.join(``))
     if(this.direction=true){
      return this.encr.join(``);
     } else{
      return this.encr.join(``).reverse();
     }
    
  }
  decrypt(mes,key) {
    if(!mes || !key){
      throw new Error(`Incorrect arguments!`)
    }
    
    this.mesCodes=[];
    this.keyCodes=[];
    this.decr=[];
    this.encr=[];
  if(!mes || !key){
    throw new Error(`Incorrect arguments!`)
  }
  this.message=mes.toUpperCase().split(``);
  this.key=key.toUpperCase().split(``);
  let counter=0;
  //Get ASCI - 65 codes
  for(let i in this.message){
    this.mesCodes[i]=this.message[i].charCodeAt(0)-65;
    this.keyCodes[i]=this.key[counter].charCodeAt(0)-65;
    //array of keys
    if(counter<this.key.length-1){
      counter++;
    } else counter=0
  }

  //////////////////
  let counter2=0;
  for(let i=0;i< this.mesCodes.length; i++){
    if(this.mesCodes[i]>26 ||this.mesCodes[i]<0 ){
      this.encr[i]=String.fromCharCode(this.mesCodes[i]+65)
    }else{
      this.encr[i]=String.fromCharCode((this.mesCodes[i]-this.keyCodes[counter2])%26-65);
      counter2++; //чтобы не учитывались пробелы , спецсимволы и цифры
    }
  }
  console.log(this.encr.join(``))
  return this.encr.join(``);
  }
}

let test =new VigenereCipheringMachine(false)

test.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey');
test.encrypt('cryptography', 'verylongkeyword')
//console.log(String.fromCharCode(33))
//console.log(` `.charCodeAt(0))

module.exports = {
  VigenereCipheringMachine
};

// X=(m+k)%26 y=(m-k)%26

//A-65 Z-90
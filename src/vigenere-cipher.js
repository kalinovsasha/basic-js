const { NotImplementedError } = require('../extensions/index.js');

///////////////////Нарушен принцип DRY, но глаз уже болит переделывать.
class VigenereCipheringMachine {
    constructor(x=true){
      this.mes;
      this.key;
      this.mesCodes=[];
      this.keyCodes=[];
      this.decr=[];
      this.encr=[];
      this.direction= x;
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
     if(this.direction==true){
      return this.encr.join(``);
     } else{
      return this.encr.reverse().join(``);
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
  counter=0
  for(let i in this.mesCodes){
    if(this.mesCodes[i]>26 ||this.mesCodes[i]<0 ){
      this.decr[i]=String.fromCharCode(this.mesCodes[i]+65)
    }else{
      this.mesCodes[i]=this.mesCodes[i]>=this.keyCodes[counter2]?this.mesCodes[i]:this.mesCodes[i]+26; //Если номер буквы шифра больше номера буквы текста
      this.decr[i]=String.fromCharCode((this.mesCodes[i]-this.keyCodes[counter2])%26+65);
      counter2++; //чтобы не учитывались пробелы , спецсимволы и цифры
    }
  }
  console.log(this.direction)
  if(this.direction==true){
    return this.decr.join(``);
   } else{
    return this.decr.reverse().join("");
   }
  }
}


//////Отладочный блок
//let test =new VigenereCipheringMachine(true)

//test.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey');
//console.log(test.encrypt('cryptography', 'verylongkeyword'))
//console.log(test.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js'))
//console.log(String.fromCharCode(82))
//console.log(` `.charCodeAt(0))
// X=(m+k)%26 y=(m-k)%26
//A-65 Z-90
module.exports = {
  VigenereCipheringMachine
};


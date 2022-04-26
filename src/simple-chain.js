const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */








const chainMaker = {
  buff:[],
  finish:``,
  length:0,
  getLength() {
    //throw new NotImplementedError('Not implemented');
    return this.length
 
  },
  addLink(value=(`( )~~`)) {
   // throw new NotImplementedError('Not implemented');
    this.buff.push(`( ${value} )~~`);
    this.length++;
    return this
  },
  removeLink(position) {
   // throw new NotImplementedError('Not implemented');
      if(position>0 && position<this.length && position%1==0){
        try {
          this.buff.splice(position-1,1)
        } catch (error) {
          buff=[];
          finish=``;
          length=0;
          throw new Error('You can\'t remove incorrect link!');
        }
      } else {
          buff=[];
          finish=``;
          length=0;
          throw new Error('You can\'t remove incorrect link!');
        }
        this.length--;
    return this
  },
  reverseChain() {
   // throw new NotImplementedError('Not implemented');
   this.buff.reverse();
    return this
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    this.finish=this.buff.join("");
    this.finish=this.finish.slice(0,this.finish.length-2);
    this.buff=[];
    this.length=0;
    return this.finish
  }
};

//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain());
//chainMaker.addLink(1).addLink(2).addLink(null).reverseChain().finishChain();



module.exports = {
  chainMaker
};

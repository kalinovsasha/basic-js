const { NotImplementedError } = require('../extensions/index.js');

const chainMaker = {
  buff:[],
  finish:``,
  getLength() {
    console.log(this.buff.length)
    return this.buff.length;
  },
  addLink(value=(`( )`)) {
    this.buff.push(`( ${value} )`);
    return this
  },
  removeLink(position) {
    console.log(position, this.buff.length);
    if (Number.isInteger(position)==false || position <= 0 || position >this.buff.length) {
      this.buff=[];
      throw new Error("You can\'t remove incorrect link!");
    }
    this.buff.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
   this.buf=this.buff.reverse();
    return this
  },
  finishChain() {
    this.finish=this.buff.join("~~");
    this.buff=[];
    return this.finish
  }
};

//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().addLink(0).reverseChain().addLink('GHI').removeLink(2).finishChain());
//chainMaker.addLink(1).addLink(2).addLink(null).reverseChain().finishChain();


module.exports = {
  chainMaker
};

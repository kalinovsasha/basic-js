const { NotImplementedError } = require('../extensions/index.js');

function getEmailDomain( email=`` ) {
    let buf=email.slice(email.indexOf("@")+1)
    if(buf.includes(`@`)){
      return getEmailDomain(buf)
    }else return buf
  return getEmailDomain(email)
}

/*
console.log(getEmailDomain(`prettyandsimple@example.com`))
console.log(getEmailDomain(`example-indeed@strange-example.com`))
console.log(getEmailDomain(`'prettya@ndsimple@example.com'`))
*/
module.exports = {
  getEmailDomain
};

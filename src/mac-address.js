const { NotImplementedError } = require('../extensions/index.js');

function isMAC48Address(mac) {
  //throw new NotImplementedError('Not implemented');
  return /^([A-F-0-9]{2}\-){5}([A-F-0-9]{2})$/i.test(mac);
}
module.exports = {
  isMAC48Address
};

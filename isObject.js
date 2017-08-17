
var getProto = require('getProto');

function isObject(value) {
  if (value) {
    return (value.constructor === Object) || !getProto(value);
  }
  return false;
}

module.exports = isObject;

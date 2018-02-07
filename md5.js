const crypto = require('crypto');

var cryptoObj = crypto.createHash('md5');

cryptoObj.update('123456');

var result = cryptoObj.digest('hex');

console.log(result);

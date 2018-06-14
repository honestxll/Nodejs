const crypto = require('crypto');

const hash = crypto.createHash('sha256');
hash.update('woshics6102acgniw');
// console.log(hash.digest('hex'));
console.log(hash.digest('base64'));

const Hmmac = require('hmmac-es6');
const credentials = require('../lib/credentials');

const verifyHmacSigned = Hmmac.middleware({
  credentialProvider: credentials,
});

module.exports = verifyHmacSigned;

const fs = require('fs');
const data = require('../credentials.json');

const lookup = (key, callback) => {
  const cred = data.filter(item => item.key === key);
  const rsaFileName = cred[0].secret;
  let contents = rsaFileName;

  if (fs.existsSync(rsaFileName)) {
    contents = fs.readFileSync(rsaFileName, { encoding: 'utf8' });
  }

  return callback({ key, secret: contents });
};

module.exports = lookup;

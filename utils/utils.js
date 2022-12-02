const fs = require('fs');

const readFile = filename =>
   fs.readFileSync(filename)
   .toString('UTF8');

exports.readFile = readFile;

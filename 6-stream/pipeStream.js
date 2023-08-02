const fs = require('fs');

const readStream = fs.createReadStream('hugeFile.txt', 'utf8');
const writeStream = fs.createWriteStream('output2.txt');

readStream.pipe(writeStream);

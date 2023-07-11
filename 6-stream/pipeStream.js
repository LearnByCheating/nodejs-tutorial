const fs = require('fs');

const readStream = fs.createReadStream('hugeFile.txt', 'utf8');
const writeStream = fs.createWriteStream('output.txt');

// readStream.on('data', (chunk) => {
//   writeStream.write(chunk);
// });

readStream.pipe(writeStream);
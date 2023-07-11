const fs = require('fs');

const readStream = fs.createReadStream('hugeFile.txt', 'utf8');
const writeStream = fs.createWriteStream('output.txt');

let count = 0;
readStream.on('data', (chunk) => {
  console.log(`Chunk ${++count} received: ${chunk.length} characters`);
  writeStream.write(chunk);
});

readStream.pipe(writeStream);
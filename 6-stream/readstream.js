const fs = require('fs');

// hugefile.txt is 2.5MB of text which means it holds 2.5 million characters
const readStream = fs.createReadStream('hugefile.txt', 'utf8');

let count = 0;
readStream.once('data', () => {
  console.log('Start the data stream');
});
readStream.on('data', (chunk) => {
  ++count
  console.log(chunk);
});
readStream.on('end', () => {
  console.log('Data stream complete. Chunk count: ', count);
});
readStream.on('error', (err) => {
  console.error(err.message);
});

const fs = require('fs');

// fs.statSync gets stats on the file, one of which is size in bytes.
const { size: fileSize } = fs.statSync('hugefile.txt');
// Convert fileSize bytes to megabytes and log to the terminal.
console.log(`Hugefile.txt size in binary megabytes (more accurate): ${(fileSize/1024/1024).toFixed(1)} MB`);
console.log(`Hugefile.txt size in decimal megabytes (more common): ${(fileSize/1000000).toFixed(1)} MB`);
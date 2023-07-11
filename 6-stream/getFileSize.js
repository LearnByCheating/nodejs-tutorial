const fs = require('fs');

// fs.statSync gets stats on the file, one if which is size in bytes.
const { size: fileSize } = fs.statSync('hugefile.txt');
// Convert fileSize bytes to megabytes and log to the terminal.
console.log(`HugeFile.txt size: ${(fileSize/1024/1024).toFixed(1)} MB`);
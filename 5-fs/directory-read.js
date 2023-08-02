const fs = require('fs');

// Read directory synchronous version
const files = fs.readdirSync('.');
console.log(1, files);
console.log(2, 'In the synchronous version, this logs after the file list is returned.');

console.log('-------------------------------------------------------------');
// Read directory async version
fs.readdir('.', (err, files) => {
  if (err) throw err;
  console.log(2, files);
});
console.log(1, 'In the asynchronous version, this logs before the file list is returned.');

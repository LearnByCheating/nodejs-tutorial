const fs = require('fs');

if (!fs.existsSync('newdir')) {
  fs.mkdirSync('newdir');
}

fs.copyFileSync('text-file.txt', 'file-copy.txt');
fs.renameSync('file-copy.txt', 'file-renamed.txt'); 
fs.renameSync('file-renamed.txt', 'newdir/file-moved.txt');
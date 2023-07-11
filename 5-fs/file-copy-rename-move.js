const fs = require('fs');

fs.copyFileSync('text-file.txt', 'file-copy.txt');
fs.renameSync('file-copy.txt', 'file-renamed.txt'); 
fs.mkdirSync('newdir');
fs.renameSync('file-renamed.txt', 'newdir/file-moved.txt');
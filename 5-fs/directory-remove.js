const fs = require('fs');

// If directory exists, remove it
if (fs.existsSync('newdir-renamed')) {
  fs.rmdir('newdir-renamed', (err) => {
    if (err) console.error(err);
    console.log('newdir-renamed has been removed');
  });
}

/* // Synchronous version:
if (!fs.existsSync('newdir-renamed')) {
  fs.rmdirSync('newdir-renamed');
  console.log('newdir-renamed has been removed');
}
*/

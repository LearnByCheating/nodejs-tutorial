const fs = require('fs');

// If directory exists, rename it
if (fs.existsSync('newdir')) {
  fs.rename('newdir', 'newdir-renamed', (err) => {
    if (err) console.error(err);
    console.log('newdir directory renamed');
  });
}

/* // Synchronous version:
if (!fs.existsSync('newdir')) {
  fs.renameSync('newdir', '../newdir-moved');
  console.log('newdir directory renamed and moved');
}
*/

const fs = require('fs');

// If directory does not exist, make it
if (!fs.existsSync('newdir')) {
  // Asynchronous method
  fs.mkdir('newdir', (err) => {
    if (err) console.error(err);
    console.log('newdir directory created');
  });
}

/* // Synchronous version:
if (!fs.existsSync('newdir')) {
  fs.mkdirSync('newdir')
  console.log('newdir directory created');
}
*/
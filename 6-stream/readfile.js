const fs = require('fs');

fs.readFile('smallfile.txt', 'utf8', function(err, data) {
  if (err) return console.error(err.message);
  console.log(data);
});

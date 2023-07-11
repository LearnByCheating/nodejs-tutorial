const fs = require('fs');

const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

fs.writeFileSync('text-file.txt', content);

const moreContent = '\n\nAppend this sentence to the existing file.'

fs.appendFileSync('text-file.txt', moreContent);

const data = fs.readFileSync('text-file.txt', 'utf8');
console.log(data);
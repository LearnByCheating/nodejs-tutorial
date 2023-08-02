const path = require('path');

// Assign pathString to an absolute path in a string.
let pathString = '/Users/steve/Documents/nodejs-tutorial/4-path/path-lesson.js';
console.log(pathString);

// Reassign pathString. Create paths with the path.join method
pathString = path.join('/', 'Users', 'steve', 'Documents', 'nodejs-tutorial', '4-path', 'path-lesson.js');
console.log(pathString);
pathString = path.join('/Users/steve/Documents/nodejs-tutorial/4-path', 'path-lesson.js');
console.log(pathString);
pathString = path.join(__dirname, 'path-lesson.js');
console.log(pathString);

// Create path with the path.resolve method
const otherpath = path.resolve(__dirname, '../2-npm/npm-lesson.js');
console.log(otherpath);
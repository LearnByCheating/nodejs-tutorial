const path = require('path');

let pathString = '/Users/steve/Documents/node-tutorial/4-path/path-lesson.js';
pathString = path.join('/', 'Users', 'steve', 'Documents', 'node-tutorial', '4-path', 'path-lesson.js');
pathString = path.join('/Users/steve/Documents/node-tutorial/4-path', 'path-lesson.js');
const pathString2 = path.join(__dirname, 'path-lesson.js');
console.log(pathString);
const otherpath = path.resolve(__dirname, '../2-npm/npm-lesson.js');
console.log(otherpath);
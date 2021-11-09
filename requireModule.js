const path = require('path')

console.log(path.sep);

const filePath = path.join('/folder','subfolder','text.txt');
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const resolve = path.resolve(__dirname,'folder','text.txt');
console.log(resolve);
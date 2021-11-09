 // npm helps us by
 // reusing our code
 // using someone's code
 // sharing our code
 // if npm package has many downloads then it is good
 
 //  local dependency - use it only in this particular projext
 // npm i <packagename>

 // global dependency
 // npm install -g <packagename>
 
 // package.json - manifest file (stores imp info abt project/package)'
 // manual approch (create package.json in the root, create properties etc)
 // npm init (step by step, press enter to skip)
 // npm init -y (everything default)

 const _ = require('lodash');

 const items = [1,[2,[3,[4]]]];
 const newItems = _.flattenDeep(items)
 console.log(newItems)
console.log('hello world hello')
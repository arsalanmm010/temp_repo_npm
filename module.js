// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./Module2');
const sayHi = require('./module3');
const alter = require('./alternative-flavor');
require('./mind-grenade')
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
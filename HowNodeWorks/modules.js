// console.log(arguments); // everything is wrap in wrapper function
// console.log(require("module").wrapper);

// module.exports
const C = require("./test-module-1");
const calc1 = new C();

console.log(calc1.add(2, 5));

//exports.xxx
// const calc2 = require("./test-module-2");
//obj destructuring
const { add, multiply, divide } = require("./test-module-2");
console.log(add(2, 5));
console.log(multiply(2, 5));

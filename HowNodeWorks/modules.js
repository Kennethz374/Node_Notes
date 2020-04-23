// console.log(arguments); // everything is wrap in wrapper function
// console.log(require("module").wrapper);

const C = require("./test-module-1");
const calc1 = new C();

console.log(calc1.add(2, 5));

// setTimeout(function() {
//   setTimeout(function() {
//     console.log("setTimeout");
//   }, 0);
//   setImmediate(function() {
//     console.log("setImmediate");
//   });
// }, 10);
const os = require("os");
console.log(os.cpus());

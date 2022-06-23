const os = require("os");
//este modulo ya existe dentro del nodejs

console.log(os.platform());
console.log(os.release());
console.log("free men", os.freemem(), "bytes");

const myImport = require('./export_demo_exports'); // import all.
const { ages } = require('./export_demo_exports'); // import ages
// const { ages, people } = require('./export_demo_exports'); // import all named properties from the other file

console.log(myImport.ages);
console.log(myImport.people);

const os = require('os');

console.log(os.hostname(), os.platform(), os.networkInterfaces());
console.log(global);

// global.setTimeout(() => {
//     console.log('Timez up!')
// }, 3000);

// Any global method is available without use of global keyword
setTimeout(() => {
    console.log('Timez up!');
    clearInterval(interval);
}, 5000);

var number = 0;
const interval = setInterval(() => {
    console.log(number);
    number += 1;
}, 1000);

console.log(__dirname); //gives full path to dir
console.log(__filename); //gives full path to file






const fs = require('fs');

const readStream = fs.createReadStream('./largeTextFile.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./largeTextFile2.txt');

//must be called 'data'
// readStream.on('data', (myChunk) => {
//     console.log('---------- New Chunk ----------');
//     console.log(myChunk);
//     // Write some text to the file.
//     writeStream.write('\nNEW CHUNK - Oh Yeah!!!\n')
//     // Write a chunk to the file.
//     writeStream.write(myChunk)
// });

//Shortcut of above using pipe
// As read stream and Write stream are already define above...
readStream.pipe(writeStream);
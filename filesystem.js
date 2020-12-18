const { ifError } = require("assert");
const fs = require('fs');


//reading
// readFile has a no parameter callback that executes after reading is complete.
// fs.readFile('./textfile.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })


//writing
// writeFile has a no parameter callback that executes after writing is complete.
// path, new content, callback
// fs.writeFile('./textfile2.txt', 'New Content for this file.', () => {
//     console.log('Do this stuff after writing...');
// });
//appending
// writeFile has a no parameter callback that executes after writing is complete.
// path, new content, callback
fs.appendFile('./textfile1.txt', 'More new Content for this file.', () => {
    console.log('Do this stuff after writing...');
});




//dirs
// mkdir has a no parameter callback that executes after creation is complete.
if (fs.existsSync('./newDir1')) {
    console.log('Directory Already Exists');
    fs.rmdir('./newDir1', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Directory deleted...');
    });
}
else {
    fs.mkdir('./newDir1', (myError) => {
        if (myError) {
            console.log(myError);
        }
        console.log('Directory has been created.');
    });
}


//deleting files
if (fs.existsSync('./textfile2.txt')) {
    fs.unlink('./textfile2.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('File deleted...');
    });
}
else {
    console.log('File does not exist...');
}



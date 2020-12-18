const http = require('http');
const fs = require('fs');
const _ = require('lodash'); //can call this what you want but underscore is normally used.

const server = http.createServer((request, response) => {

    //Now Using lodash
    const num = _.random(0, 20);
    console.log(num);

    const greet = _.once(() => {
        console.log('The only hello');
    })

    greet();


    //return url being sought and method which is GET in this case.
    // console.log(request.url, request.method);

    // Set HEader type
    // response.setHeader('Content-Type', 'text/plain');
    // // Add content
    // response.write('Ready Player 1...');
    // // Tell server to complete and send
    // response.end();

    // Set Header type
    response.setHeader('Content-Type', 'text/html');
    // Add content
    // response.write('<h1>Heading Level 1...</h1>');
    // response.write('<p>Paragraph</p>');

    // Adding the ability to send correct pages if requested.
    // Add path var to append to...
    let path = './views/';

    switch (request.url) {
        case '/':
            path += 'index.html';
            response.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            response.statusCode = 200;
            break;
        // How to handle a permanent redirect
        case '/about-me':
            response.statusCode = 301;
            response.setHeader('Location', '/about');
            response.end;
            break;
        default:
            path += '404.html';
            response.statusCode = 404;
    }


    //Now working with HTML File
    // using path var
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            response.end();
        } else {
            // response.write(data);
            // if only returning a single statement text can go in end()
            response.statusCode = 200;
            response.end(data);
        }
    });



    // Tell server to complete and send
    // response.end();


});


server.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000:');
});
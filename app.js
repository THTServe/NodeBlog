//Note: This file shows how to use express package rather 
//Note: than basic HTML for providing the Web service


//Note: Adding 3rd party apps.
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
//Note: Adding functions form other local files
// const blogM = require('./models/blog');  moved to blogRoutes.js
const blogRoutes = require('./routes/blogsRoutes');


//Note: Express Settings
// assign a var to the express function/class
const app = express();


//Note: Mongoose setup
//MongoDb Connection String
const dbUri = 'mongodb+srv://project0_tester:JPKW5M8pkoRdPI9p@cluster0.gmamc.mongodb.net/project_0_db?retryWrites=true&w=majority';
// Vv4HtzqILii1MLdg //Admin
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true }) //options added to stop an library error.
    .then((response) => {
        console.log('Project:0 DB Connection Established.'),
            //connected to DB Now listen for requests to express (app).

            //assign port 3000
            app.listen(3000)
    })
    .catch((error) => console.log(error)); //Extra code stops errors.


// each of these are checked in turn and run if the request matches
// Adding a view engine for express
app.set('view engine', 'ejs');
// default location is views folder but if using elsewhere...
app.set('views', 'ejs_views');
//Note: This section for listen and respond

// Create a folder that is public and can be access by other pages.
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); //Takes URL data and turns into object data.

// Adding a Logging function of our own
// Next needs to be used here to tell server to move to Next piece of code.
//Note: Replaced below with morgan (a monitoring app -  see NPM Morgan)
// app.use((req, res, next) => {
//     console.log('Request made:');
//     console.log('host: ', req.hostname);
//     console.log('path ', req.path);
//     console.log('method ', req.method);
//     next();
// });
app.use(morgan('dev'));

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

//Note: The below show some hardcoded tests for the creation of a new blog.
// Create a method that creates a new blog entry when the user goes to /add-blog page.
// app.get('/add-blog', (req, res) => {
//     const nBlog = new nBlog({
//         title: 'new blog 2 title',
//         snippet: 'Text about the new blog',
//         body: 'Text Text Text'
//     });
//Note: Now we created the above save it to the DB when going to /add-blog url 
//Note: then show in browser with res.send(result)
//     nBlog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((e) => {
//             console.log(e);
//         })
// });


//Note: Mongo method to return all entries in the collection.
//Create a method to get al the blogs
// app.get('/all-blogs', (req, res) => {
//     nBlog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((e) => {
//             console.log(e);
//         });
// });

//Note: Mongo method to return a single entry in the collection matching the ID provided
//Create a method to get single blog from knowing the ID.
// app.get('/single-blog', (req, res) => {
//     nBlog.findById('5fca696aa154a74fe4bce4cc')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((e) => {
//             console.log(e);
//         });
// });




//Note: Replaced with morgan
// Adding a pointless function.
// Showing that NEXT() is working
// app.use((req, res, next) => {
//     console.log('Request made: Now in pointless function.');
//     next();
// });




//Note:Express responses for specific pages
//Note: Home Page
//assign details first page
app.get('/', (req, res) => {
    // Adding in ejs functionality

    // res.send('<h1>Home Page</h1>'); replaced with below
    // res.sendFile('./views/index.html', { root: __dirname });  replaced with below
    // render the page and also pass data to the page.
    res.render('index', { myTitle: 'Home Page' }); //or if using same name just use blogs e.g not blogs: 'blogs'
});

//Note: About Page
//assign details second page
app.get('/about', (req, res) => {
    // res.send('<h1>About Page</h1>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { myTitle: 'About Page' });
});

//Note: About Page after redirect
app.get('/about-me', (req, res) => {
    // res.send('<h1>About Page</h1>');
    // res.redirect('/about.html');
    res.redirect('/about', { myTitle: 'Redirected' }).render('about');
});

// moved to blogRoutes.js
// // Gets the list of all blogs and then renders the blogs page
// // Sort method also added in.
// app.get('/blogs', (req, res) => {
//     blogM.find().sort({ createdAt: -1 }).then((result) => { // -1 = descending order
//         res.render('blogs', { myTitle: 'Blogs', blogs: result });
//     })
//         .catch((e) => console.log(e));
//     // res.send('<h1>About Page</h1>');
//     // res.redirect('/about.html');
// });


// moved to blogRoutes.js
// app.post('/blogs', (req, res) => {
//     const newBlogInst = blogM(req.body);

//     newBlogInst.save()
//         .then((result) => {
//             res.redirect('/blogs')
//         })
//         .catch((e) => console.log(e));
// });

// moved to blogRoutes.js
// app.get('/blogs/:id', (req, res) => {
//     const id = req.params.id;
//     console.log(id);
//     blogM.findById(id)
//         .then((result) => {
//             res.render('details', { myTitle: 'Blog Detail', blog: result })
//         }).catch((e) => console.log(e));
// });


// moved to blogRoutes.js
// // As this is script run from front end we have to send back a 
// // response rather than just redirect to blogs again
// app.delete('/blogs/:id', (req, res) => {
//     const id = req.params.id;
//     blogM.findByIdAndDelete(id).then((result) => {

//     }).catch((e) => console.log(e));
// });

//Note: Tell App to use the routes from blogRoutes.js
app.use(blogRoutes);
//Note: You can also set the route here...
// app.use('/blogs', blogRoutes).
//Note: All routes in blogRoutes would then start with /


//Note: Create New Blog Page
app.get('/create', (req, res) => {
    // res.send('<h1>About Page</h1>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('create', { myTitle: 'Create Page' });
});


// Note: 404 Page
// This must go last.
// Note status is being sent here as well.
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { myTitle: '404 Error' });
})

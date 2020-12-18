//Note: Adding express' router function.
const express = require('express');
// create instance of router.
const myRouter = express.Router();
//Note:  Create a controller
const blogController = require('../controllers/blogController');
const blogM = require('../models/blog');


//Note: Below cut from app.js

//All Blogs Page
myRouter.get('/blogs', blogController.blog_index);


//Code to save a blog to DB
myRouter.post('/blogs', (req, res) => {
    const newBlogInst = blogM(req.body);
    newBlogInst.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch((e) => console.log(e));
});

//Code to select a particular blog and create a page dynamically to show it
myRouter.get('/blogs/:id', blogController.blog_details);


// Code to delete a selected blog by ID.
// As this is script run from front end we have to send back a 
// response rather than just redirect to blogs again
myRouter.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;
    blogM.findByIdAndDelete(id).then((result) => {
        res.json({ redirect: '/blogs' });
    })
        .catch((e) => console.log(e));
});

//Create New Blog Page
myRouter.get('/create', blogController.blog_create_get);



//Note: Export the router instance for use in other files. e.g. app.js
//Note: Where these routes were removed from.
module.exports = myRouter;


// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
// need ref to blog model here as well
const blogM = require('../models/blog');


// Cut from blogRoutes.js
const blog_index = (req, res) => {
    blogM.find().sort({ createdAt: -1 }).then((result) => { // -1 = descending order
        res.render('blogs/blogs', { myTitle: 'Blogs', blogs: result });
    })
        .catch((e) => console.log(e));
}


const blog_details = (req, res) => {
    const id = req.params.id;
    console.log(id);
    blogM.findById(id)
        .then((result) => {
            res.render('blogs/details', { myTitle: 'Blog Detail', blog: result })
        }).catch((e) => res.status(404).render('404', { myTitle: '404 Error' }));
}

const blog_create_get = (req, res) => {
    res.render('blogs/create', { myTitle: 'Create Page' });
}


//Note: List the items to export.
module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
}
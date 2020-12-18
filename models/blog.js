const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for Database / Collections
const myBlogSchema = Schema(
    {
        title: {
            type: String,
            required: true,
        },
        snippet: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        }
    }, {
    timestamps: true,
});

// mongoose.model('collectionName', SchemaName)
//Tell the Db collection called blogs what a blog should look like by passing it the schema.
const blog_module = mongoose.model('Blog', myBlogSchema);  // mongoose will look for plural of name used here, e.g. it will look for Blogs in the DB.


//Export for use in other parts of the project
module.exports = blog_module;
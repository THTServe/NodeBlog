# NodeBlog

## Introduction
This is a NodeJs Project that builds a blog Website.
It allow a regitered user to add new blogs to the site.
The Blogs are stored in a MongoDB Database and the pages dynamically conructed when a blog is selected.

Many thanks to [Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg) for his guidance in building this.  

## Structure
The project comprises the following:

### Imports
* express 4.17.1 - Web Framework on which everything else is built
* ejs 3.1.5 - uses <% %> to embed JS in HTML
* lodash 4.17.20 - Used for 'once' method to call a function once only
* mongoose 5.11.3 - Adds core functionality for MongooseDB connection
* morgan 1.10.0 - HTTP request logger middleware for node.js

### Folders
* Controllers - Imports: model - Exports: blog_index, blog_details, blog_create_get
* Views - EJS files - HTML views for pages: index, About, 404, and blogs folder.
* Blogs - EJS views for blogs(all), create(a blog), view(a blog)
* Partials - EJS files for Header, footer and navigation section
* Models - Holds DB Schema for MongoDB
* Public - Stylesheet for css settings
* Routes - Express routing file

### Files
#### App.js - main file.
1. Add 3rd party apps
2. Create **const app = express()**
3. Setup DB connction string, connect then listen on port 3000
4. Set up ejs as view engine with default location
5. Set public folder for css style
6. use morgan for logging
#### Routing section
    a. get and render homepage, about page and redirect about-me
    b. use blogroutes for routing to blog views
    c. get and rednder 404 page

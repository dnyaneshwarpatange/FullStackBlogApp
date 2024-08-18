// controllers/blogController.js
const Blog = require('../models/BlogModel');

// Create a new blog
const createBlog = async (req, res) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.status(201).send({ message: 'Blog created successfully', blog });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: 'Error creating blog', error });
    }
};
// Get all blogs
const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).send(blogs);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving blogs', error });
    }
};

// Update a blog by ID
const updateBlog = async (req, res) => {
    const blogId = req.params.id;
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(blogId, req.body, { new: true });
        if (!updatedBlog) {
            return res.status(404).send({ message: 'Blog not found' });
        }
        res.status(200).send({ message: 'Blog updated successfully', updatedBlog });
    } catch (error) {
        res.status(400).send({ message: 'Error updating blog', error });
    }
};

// Delete a blog by ID
const deleteBlog = async (req, res) => {
    const blogId = req.params.id;
    try {
        const deletedBlog = await Blog.findByIdAndDelete(blogId);
        if (!deletedBlog) {
            return res.status(404).send({ message: 'Blog not found' });
        }
        res.status(200).send({ message: 'Blog deleted successfully', deletedBlog });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting blog', error });
    }
};

module.exports = {
    createBlog,
    getBlogs,
    updateBlog,
    deleteBlog,
};

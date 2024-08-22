const Blog = require('../models/BlogModel');

const createBlog = async (req, res) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.status(201).send({ message: 'Blog created successfully', blog });
    } catch (error) {
        console.error('Error creating blog:', error);
        if (error.errors) {
            const formattedErrors = error.errors.map(err => err.message).join(', ');
            res.status(400).send({ message: formattedErrors });
        } else {
            res.status(400).send({ message: 'Error creating blog', error: error.toString() });
        }
    }
};


const getBlogById = async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res.status(404).send({ message: 'Blog not found' });
      }
      res.status(200).send(blog);
    } catch (error) {
      console.error('Error retrieving blog:', error);
      res.status(500).send({ message: 'Error retrieving blog', error: error.message });
    }
  };
  const getPostbyUser = async (req, res) => {
    try {
        const posts = await Blog.find({ userId: req.params.userId });
        res.status(200).send(posts);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving posts', error: error.message });
    }
};
  
  const getBlogs = async (req, res) => {
    try {
      const blogs = await Blog.find();
      res.status(200).send(blogs);
    } catch (error) {
      console.error('Error retrieving blogs:', error);
      res.status(500).send({ message: 'Error retrieving blogs', error: error.message });
    }
  };
  

const updateBlog = async (req, res) => {
    const blogId = req.params.id;
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(blogId, req.body, { new: true });
        if (!updatedBlog) {
            return res.status(404).send({ message: 'Blog not found' });
        }
        res.status(200).send({ message: 'Blog updated successfully', updatedBlog });
    } catch (error) {
        console.error('Error updating blog:', error);
        res.status(400).send({ message: 'Error updating blog', error: error.message });
    }
};

const deleteBlog = async (req, res) => {
    const blogId = req.params.id;
    try {
        const deletedBlog = await Blog.findByIdAndDelete(blogId);
        if (!deletedBlog) {
            return res.status(404).send({ message: 'Blog not found' });
        }
        res.status(200).send({ message: 'Blog deleted successfully', deletedBlog });
    } catch (error) {
        console.error('Error deleting blog:', error);
        res.status(500).send({ message: 'Error deleting blog', error: error.message });
    }
};

module.exports = {
    createBlog,
    getBlogs,
    updateBlog,
    deleteBlog,
    getBlogById,
    getPostbyUser,
};

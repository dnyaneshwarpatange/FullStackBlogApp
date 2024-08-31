const mongoose = require('mongoose');
const User = require("./userModel")

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User, 
        required: true,
    },
}, {
    timestamps: true,
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;

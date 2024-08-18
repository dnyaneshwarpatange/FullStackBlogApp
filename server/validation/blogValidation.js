const { z } = require("zod");

const createBlogSchema = z.object({
    title: z.string({ required_error: "Title is required" }).trim().min(6, { message: "Minimum 6 characters required in title" }).max(200, { message: "Maximum 200 characters allowed in title" }),
    image: z.string({ required_error: "Image URL is required" }).trim().min(4, { message: "Minimum 4 characters required in URL" }).max(200, { message: "Maximum 200 characters allowed in the image URL" }), // Changed from `imageUrl` to `image`
    description: z.string({ required_error: "Description is required" }).trim().min(50, { message: "Minimum 50 characters required in description" }).max(5000, { message: "Maximum 5000 characters allowed in description" }),
    // user: z.string({ required_error: "User ID is required to create blog" }).trim(),
});

const updateBlogSchema = z.object({
    _id: z.string({ required_error: "Blog ID is required to update blog" }).trim(),
    title: z.string({ required_error: "Title is required" }).trim().min(6, { message: "Minimum 6 characters required in title" }).max(30, { message: "Maximum 30 characters allowed in title" }),
    image: z.string({ required_error: "Image URL is required" }).trim().min(4, { message: "Minimum 4 characters required in URL" }).max(100, { message: "Maximum 100 characters allowed in the image URL" }), // Changed from `imageUrl` to `image`
    description: z.string({ required_error: "Description is required" }).trim().min(50, { message: "Minimum 50 characters required in description" }).max(5000, { message: "Maximum 5000 characters allowed in description" }),
    user: z.string({ required_error: "User ID is required to create blog" }).trim(),
});

const deleteBlogSchema = z.object({
    _id: z.string({ required_error: "Blog ID is required to delete blog" }).trim(),
});

module.exports = { createBlogSchema, updateBlogSchema, deleteBlogSchema };

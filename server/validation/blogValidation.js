const {z} = require("zod");

const createBlogSchema = z.object({
    title:z.string({required_error:"Title is reqired"}).trim().min(6,{message:"minimum 6 characters are required in title"}).max(30,{message:"maximum 30 characters are allowed in title"}),
    image:z.string({required_error:"image url is required"}).trim().min(4,{message:"minimum 4 characters are required in url"}).max(40,{message:"maximum 40 charactres are allowed in the image url"}),
    description:z.string({required_error:"Title is reqired"}).trim().min(50,{message:"minimum 50 characters are required in title"}).max(5000,{message:"maximum 5000 characters are allowed in title"}),
    user:z.string({required_error:"user id is required to create blog"}).trim()

})

const updateBlogSchema = z.object({
    _id:z.string({required_error:"blog id is required to update blog"}).trim(),
    title:z.string({required_error:"Title is reqired"}).trim().min(6,{message:"minimum 6 characters are required in title"}).max(30,{message:"maximum 30 characters are allowed in title"}),
    image:z.string({required_error:"image url is required"}).trim().min(4,{message:"minimum 4 characters are required in url"}).max(40,{message:"maximum 40 charactres are allowed in the image url"}),
    description:z.string({required_error:"Title is reqired"}).trim().min(50,{message:"minimum 50 characters are required in title"}).max(5000,{message:"maximum 5000 characters are allowed in title"}),
    user:z.string({required_error:"user id is required to create blog"}).trim()

})

const deleteBlogSchema = z.object({
    _id:z.string({required_error:"blog id is required to delete blog"}).trim(),
})
module.exports = {createBlogSchema,updateBlogSchema,deleteBlogSchema};
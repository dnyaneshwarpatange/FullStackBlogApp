const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const {signInSchema,signUpSchema} = require("../validation/authValidation");
const {createBlogSchema,updateBlogSchema,deleBlogSchema, deleteBlogSchema} = require("../validation/blogValidation");
const validate = require("../middlewares/validateMiddleware");
const blogControllers = require("../controllers/blogControllers")
const {getBlogById,createBlog,getBlogs,updateBlog,deleteBlog} = require("../controllers/blogControllers");
const { getParsedType } = require("zod");

router.get("/",(req,res)=>{
    res.send("Welcome to the Server");
});


router.post("/sign-up",validate(signUpSchema),authControllers.register);
router.post("/sign-in",validate(signInSchema),authControllers.login);


router.post("/create",validate(createBlogSchema),createBlog);
router.get("/blogs",getBlogs);
router.get('/blogs/:id', getBlogById);
router.get("/user/:userId",blogControllers.getPostbyUser)

router.put("/update/:id",validate(updateBlogSchema),updateBlog);
router.delete("/delete/:id",validate(deleteBlogSchema),deleteBlog)



module.exports = router;
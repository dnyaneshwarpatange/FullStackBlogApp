const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const { signInSchema, signUpSchema } = require("../validation/authValidation");
const { createBlogSchema, updateBlogSchema, deleteBlogSchema } = require("../validation/blogValidation");
const validate = require("../middlewares/validateMiddleware");
const { createBlog, getBlogs, updateBlog, deleteBlog } = require("../controllers/blogControllers");

router.get("/", (req, res) => {
    res.send("Welcome to the Server");
});

router.post("/sign-up", validate(signUpSchema), authControllers.register);
router.post("/sign-in", validate(signInSchema), authControllers.login);

router.post("/create", validate(createBlogSchema), createBlog);
router.get("/blogs", getBlogs);
router.put("/update/:id", validate(updateBlogSchema), updateBlog);
router.delete("/delete/:id", validate(deleteBlogSchema), deleteBlog);

module.exports = router;

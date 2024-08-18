const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const {signInSchema,signUpSchema} = require("../validation/authValidation")
const validate = require("../middlewares/validateMiddleware");
// const blogControllers = require("../controllers/blogControllers")
const {createBlog,getBlogs,updateBlog,deleteBlog} = require("../controllers/blogControllers");

router.get("/",(req,res)=>{
    res.send("Welcome to the Server");
});



router.post("/sign-up",validate(signUpSchema),authControllers.register);
router.post("/sign-in",validate(signInSchema),authControllers.login);


router.post("/create/:id",createBlog);
router.get("/blogs",getBlogs)
router.put("/update/:id",updateBlog);
router.delete("/delete/:id",deleteBlog)


module.exports = router;
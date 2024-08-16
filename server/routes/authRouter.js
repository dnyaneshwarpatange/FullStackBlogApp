const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/authControllers");
const {signInSchema,signUpSchema} = require("../validation/authValidation")
const validate = require("../middlewares/validateMiddleware");
// const blogControllers = require("../controllers/blogControllers")

router.get("/",(req,res)=>{
    res.send("Welcome to the Server");
});



router.post("/sign-up",validate(signUpSchema),authControllers.register);
router.post("/sign-in",validate(signInSchema),authControllers.login);


router.post("/create/:id",(req,res)=>{
    res.send("post-create-blog");
});
router.get("/blogs",(req,res)=>{
    res.send("post-get-blogs-route");
})
router.put("/update/:id",(req,res)=>{
    res.send("post-update-blog-route");
});
router.delete("/delete/:id",(req,res)=>{
    res.send("post-delete-blog-route");
})


module.exports = router;
const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("Welcome to the Server");
});
router.post("/sign-up",(req,res)=>{
    res.send("post-Sign-Up-route");
});
router.post("/sign-in",(req,res)=>{
    res.send("post-sign-in-route");
});
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
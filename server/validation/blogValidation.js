const { request } = require("express");
const {z} = require("zod");

const signUpSchema = z.object({
    username:z.string({required_error:"Username is required"}).trim().min(4,{message:"User shoud have minimum 4 characters"}).max(10,{message:"Maximum 10 Characters are Allowed only"}),
    email:z.string({required_error:"email is required"}).trim().min(3,{message:"minimum 3 characters are required in the email"}).max(25,{message:"Maximum 25 characters are allowed in the email"}).email(),
    password:string({required_error:"Password is Required"}).trim().min(4,{message:"Password must have minimum 4 characters"}).max(15,{message:"Maximum 15 characters are allowed in the password"}),
})

const signInSchema = z.object({
    email:z.string({required_error:"Email is required"}).email().trim(),
    password:z.string({required_error:"password is required"}).trim(),
})

module.exports = {signInSchema,signUpSchema};
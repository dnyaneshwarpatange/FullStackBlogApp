require("dotenv").config();
const express = require("express");
const app = express();
const mongoconnection = require("./utils/db")

app.use(express.json());


const PORT = process.env.PORT || 3000;

mongoconnection().then(()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`Server Started on Port ${PORT}`);
        })
        
    } catch (error) {
        console.log(`Failed to Start Server on Port $(PORT)`)
        console.log(error);
        
    }
})



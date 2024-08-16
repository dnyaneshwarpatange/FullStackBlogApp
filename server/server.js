require("dotenv").config();
const express = require("express");
const app = express();
const mongoconnection = require("./utils/db");
const router = require("./routes/authRouter");

app.use(express.json());
app.use(router);


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



require("dotenv").config();
const express = require("express");
const app = express();
const mongoconnection = require("./utils/db");
const router = require("./routes/authRouter");
const cors = require("cors");

app.use(express.json());

const corsOptions = {
    origin: ["http://localhost:5173","https://blogx-dusky.vercel.app"],
    method: ["GET","POST","PUT","DELETE"],
    Credential:true,
};
app.use(cors(corsOptions));
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



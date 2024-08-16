const mongoose  = require("mongoose");
const URI  = process.env.MONGODB_URI;
// console.log(URI);

const mongoconnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection Successful");

        
    } catch (error) {
        console.log("connection Failed");
        console.log(error);
        process.exit(1)
        
    }

}
module.exports = mongoconnection;
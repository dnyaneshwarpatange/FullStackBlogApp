const User = require("../models/userModel");
const bcrypt = require("bcryptjs");


const register = async (req, res) => {
    try {
        const { username, email,password } = req.body;

        const userExists = await User.findOne({email});

        if (userExists) {
            return res.status(400).send({ msg: "User Already Exists" });
        }
        const userCreated = await User.create({ 
            username, 
            email,  
            password,
        });

        res.status(201).json({
            msg: "User registered successfully",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Something Went Wrong with Registration" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });
        console.log(userExist)

        if (!userExist) {
            return res.status(400).send({ msg: "User Does Not Exist" });
        }

        const user = await bcrypt.compare(password, userExist.password);



        if (user) {
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        } else {
            res.status(400).send({ msg: "Invalid Credentials" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
    }
};

module.exports = {register, login };
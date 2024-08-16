const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

userSchema.pre("save", async function(next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }
    try {
        const saltRounds = 10;
        const hashedPass = await bcrypt.hash(user.password, saltRounds);
        user.password = hashedPass;
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.generateToken = async function() {
    try {
        const token = jwt.sign({
            userId: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        }, process.env.JWT_SECRET, {
            expiresIn: "28d",
        });
        return token;
    } catch (error) {
        console.log("Error in generating JWT token");
        console.log(error);
    }
}

const User = mongoose.model("User", userSchema);
module.exports = User;

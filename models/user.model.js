const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

//TODO: Create a userSchema where, It takes an Object as an argument, In which you one key is one field... Here(username, email, password, etc.,)
//Todo: userSchema is nothing but a document.
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required:[true, 'username is required'],
        maxLength: [20, "username should be under 20 characters"],
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        validate: [validator.isEmail, 'Please enter a valid email'],
        unique: true,
    },
    password: {
        type: String,
        required:[true, 'Password is required'],
        minLength: [8, "Password should be atleast 8 characters"],
        select: false,
    },
    role: {
        type: String,
        default: 'user'
    },
    photo: {
        //TODO: Cloudinary Image ID
        id: {
            type: String,
            required: true
        },
        //TODO: We can get this from Cloudinary
        secure_url: {
            type: String,
            required: true
        },
    },

    forgotPasswordToken: String,
    forgotPasswordExpiry: Date,
    createdAt:{
        type: Date,
        //todo: Don't Call Date.now() here...
        default: Date.now,
    },
})

//TODO: Encryption of Password Before Saving it...
userSchema.pre('save', async function(next){
    try {
        //TODO:: If the password is not modified, then don't do encryption and execute next() => go on and save the document into the MongoDB
        if(!this.isModified('password')){
            return next();
        }
        //If the password is changed, then Encrypt the password...
        this.password = await bcrypt.hash(this.password, 15);

    } catch (error) {
        console.log(error.message)
    }
})

module.exports = mongoose.model('User', userSchema);
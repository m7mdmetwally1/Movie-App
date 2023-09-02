import mongoose from "mongoose";
import Joi from "joi";

const userSchema = mongoose.Schema({
   firstName:{
    type:String,
    required:true,
    minlength: 3, // Minimum length of 3 characters
    maxlength: 8 // Maximum length of 8 characters
   },
   lastName:{
    type:String,
    required:true,
    minlength: 3, // Minimum length of 3 characters
    maxlength: 8 // Maximum length of 8 characters
   }

    ,email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength:8
    },
    age:{
        type:Number,
        required:true,
        min:14,
        max:70
    }
},{timestamps:true})

export const userModel = mongoose.model('user',userSchema)
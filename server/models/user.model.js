import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        max:20,
        min:3
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        max:50
    },
    password:{
        type:String,
        required:true,
        min:8
    },
    isAvatar:{
        type:Boolean,
        default:false
    },
    avatarImage:{
        type:String,
        default:''
    },
}, { timestamps: true });

const User = mongoose.model('User',userSchema);
export default User;
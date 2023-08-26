import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
  },
  password:{
    type:String,
    required:true,
    minlength:6,
    maxlength:25,
    trim:true
  },
  token:{
    type:String
  },
  confirmed:{
    type:Boolean,
    default:false
  }
},{
  timestamps:true
});

const User = mongoose.model("User",userSchema);
export default User


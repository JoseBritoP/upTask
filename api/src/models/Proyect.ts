import mongoose from "mongoose";
import { boolean } from "zod";

const proyectSchema =  new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  description:{
    type:String,
    trim:true,
    required:true
  },
  limitDate:{
    type:Date,
    default: Date.now(),
  },
  client:{
    type:String,
    trim:true,
    required:true
  },
  creator:{
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  deleted:{
    type: Boolean,
    default : false
  },
  collaborators:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
},{
  timestamps:false
});

const Proyect = mongoose.model("Proyect",proyectSchema);
export default Proyect;
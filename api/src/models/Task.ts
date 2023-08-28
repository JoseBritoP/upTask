import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true
  },
  description:{
    type:String,
    required:true,
    trim:true
  },
  state:{
    type: Boolean,
    default:false,
  },
  limitDate:{
    type:Date,
    required:true,
    default:Date.now(),
  },
  priority:{
    type:String,
    required:true,
    enum:['low','medium','high']
  },
  proyect:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Proyect'
  },
  completed:{
    type :Boolean ,
    default  : false
  },
  deleted:{
    type:Boolean,
    default:false
  }
},{
  timestamps:false
});

const Task = mongoose.model('Task',taskSchema)

export default Task;
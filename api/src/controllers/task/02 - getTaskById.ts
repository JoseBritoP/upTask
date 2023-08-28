import Task from "../../models/Task";
import Proyect from "../../models/Proyect";

export const getTaskById = async (id:string,creatorId:any) => {
  const task = await Task.findOne({
    _id:id,
    deleted:false
  }).populate({
    path:'proyect',
    select:["_id","name","description","client","creator"]
  });

  if(!task) throw new Error(`Task not found`);
  // const proyect = task.proyect

  const proyect = await Proyect.findOne({
    _id:task.proyect?._id
  })
  if(!proyect) throw new Error(`Proyect not found`);
  if(proyect.creator?.toString() !== creatorId.toString()) throw new Error(`Unauthorized to add task`);

  return task
};
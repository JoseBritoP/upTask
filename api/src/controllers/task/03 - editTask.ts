import Task from "../../models/Task";
import Proyect from "../../models/Proyect";
import { TaskEdit } from "../../types/task";
export const editTask = async ({id,creatorId,name,description,state,limitDate,priority,completed}:TaskEdit) => {
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

  task.name = name || task.name;
  task.description = description || task.description;
  task.state = state || task.state;
  task.limitDate = limitDate || task.limitDate;
  task.priority = priority || task.priority;
  task.completed = completed || task.completed;

  const editTask = await task.save();
  return editTask;
};
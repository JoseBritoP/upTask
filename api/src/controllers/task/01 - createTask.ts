import Task from "../../models/Task";
import Proyect from "../../models/Proyect";
import { TaskType } from "../../types/task";
export const createTask = async({name,description,priority,proyect,creatorId}:TaskType) => {
  const proyectBDD = await Proyect.findOne({
    _id:proyect,
    deleted:false
  });
  if(!proyectBDD) throw new Error(`Proyect no found`);

  if(proyectBDD.creator?.toString() !== creatorId.toString()) throw new Error(`Unauthorized to add tasks`);

  const newTask = await Task.create({name,description,priority,proyect});
  return newTask;
};
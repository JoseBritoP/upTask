import Task from "../../models/Task";
import Proyect from "../../models/Proyect";

export const getAllProyectTask = async (id:string,creatorId:any) => {
  const proyectBDD = await Proyect.findOne({
    _id:id,
    deleted:false
  })

  if(!proyectBDD) throw new Error(`Proyect not found`);
  if(proyectBDD.creator?.toString() !== creatorId) throw new Error(`Unauthorized to get the tasks in proyect`);

  const tasks = await Task.find({
    proyect:id
  }).select("_id name description state limitDate priority completed");
  if(tasks.length === 0 || !tasks) throw new Error(`This proyect don't have task's`)
  // return tasks
  // return proyectBDD
  const result = {
    _id: proyectBDD?._id,
    name:proyectBDD?.name,
    description : proyectBDD?.description ,
    limitDate: proyectBDD?.limitDate,
    client: proyectBDD?.client,
    collaborators: proyectBDD?.collaborators.length === 0 ? 'No collaborators' : proyectBDD?.collaborators,
    creator: proyectBDD?.creator,
    tasks: tasks
  }

  return result
};
import Task from "../../models/Task";
import Proyect from "../../models/Proyect";

export const getAllProyectTask = async (id:string,creatorId:any) => {
  const proyectBDD = await Proyect.findOne({
    _id:id,
    deleted:false
  })
  .select("_id name description limitDate client collaborators tasks creator")
  .populate({
    path:"tasks",
    select: "_id name description state limitDate priority completed"
  })

  if(!proyectBDD) throw new Error(`Proyect not found`);
  if(proyectBDD.creator?.toString() !== creatorId) throw new Error(`Unauthorized to get the tasks in proyect`);

  return proyectBDD
};
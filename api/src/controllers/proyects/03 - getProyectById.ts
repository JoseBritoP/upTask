import Proyect from "../../models/Proyect";

export const getProyectById = async (id:string,creatorId:any) => {
   const proyect = await Proyect.findOne({
    _id: id,
    creator: creatorId,
    deleted: false, // Agrega esta condición
  }).select("_id name description limitDate client collaborators tasks creator")
  .populate({
    path: "tasks",
    match: {deleted:false},
    select: "_id name description state limitDate priority completed"
  });
  if(!proyect) throw new Error (`The proyect don't exist`);
  if(proyect.creator?.toString() !== creatorId) throw new Error(`Unauthorized`)
  return proyect
};
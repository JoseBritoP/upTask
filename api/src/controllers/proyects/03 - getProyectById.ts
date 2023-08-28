import Proyect from "../../models/Proyect";

export const getProyectById = async (id:string,creatorId:any) => {
   const proyect = await Proyect.findOne({
    _id: id,
    creator: creatorId,
    deleted: false, // Agrega esta condición
  });
  if(!proyect) throw new Error (`The proyect don't exist`);
  if(proyect.creator?.toString() !== creatorId) throw new Error(`Unauthorized`)
  return proyect
};
import Proyect from "../../models/Proyect";
import { UpdateProyect } from "../../types/proyect";
export const editProyect = async (id:string,creatorId:any,{name,description,limitDate,client,collaborators}:UpdateProyect) => {
  // id del proyecto
  // creatorId para que solo el creador pueda editarlo
  // Fields a editar
  const proyect = await Proyect.findById(id);
  if(!proyect) throw new Error (`The proyect don't exist`);
  if(proyect.creator?.toString() !== creatorId) throw new Error(`Unauthorized`);

  proyect.name = name || proyect.name;
  proyect.description = description || proyect.description;
  proyect.limitDate = limitDate || proyect.limitDate;
  proyect.client =  client || proyect.client

  await proyect.save();

  return proyect;
};
import Proyect from "../../models/Proyect";

export const getAllProyects = async ({creatorId}:any) => {
  const proyects = await Proyect.find().where('creator').equals(creatorId);
  return proyects
};
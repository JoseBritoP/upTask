import User from "../../models/User";
import Proyect from "../../models/Proyect";
import mongoose from "mongoose";
import { NewProyect } from "../../types/proyect";
export const createProyect = async ({name,description,client,creatorId}:NewProyect) => {
  const user = await User.findOne({
    _id:creatorId,
    banned:false
  })
  if(!user) throw new Error(`Creator not found`);
  if(!user.premium && user.proyects?.length >= 2) throw new Error('Solo los usuarios premium pueden tener más de 2 proyectos activos')
  const newProyect = new Proyect({name,description,client});
  newProyect.creator = new mongoose.Types.ObjectId(creatorId);
  const savedProyect = await newProyect.save();
  user.proyects.push(savedProyect._id);
  await user.save();
  return {
    id: savedProyect?._id,
    name: savedProyect?.name,
    description: savedProyect?.description,
    limitDate: savedProyect?.limitDate,
    client: savedProyect?.client,
    collaborators: savedProyect?.collaborators.length === 0 ? 'No collaborators yet' : savedProyect.collaborators,
    tasks: savedProyect?.tasks.length === 0 ? 'No task yet' : savedProyect?.tasks,
    creator: savedProyect?.creator
  }
};
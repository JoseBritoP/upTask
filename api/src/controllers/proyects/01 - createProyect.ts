import User from "../../models/User";
import Proyect from "../../models/Proyect";
import mongoose from "mongoose";
import { NewProyect } from "../../types/proyect";
export const createProyect = async ({name,description,client,creatorId}:NewProyect) => {
  const newProyect = new Proyect({name,description,client});
  const user = await User.findOne({
    _id:creatorId,
    deleted:false
  })
  if(!user) throw new Error(`Creator not found`)
  newProyect.creator = new mongoose.Types.ObjectId(creatorId);
  const savedProyect = await newProyect.save();
  user.proyects.push(savedProyect._id);
  await user.save();
  return savedProyect
};
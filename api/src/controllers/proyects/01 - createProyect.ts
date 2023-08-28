import Proyect from "../../models/Proyect";
import mongoose from "mongoose";
import { NewProyect } from "../../types/proyect";
export const createProyect = async ({name,description,client,creatorId}:NewProyect) => {
  const newProyect = new Proyect({name,description,client});
  newProyect.creator = new mongoose.Types.ObjectId(creatorId);
  const savedProyect = await newProyect.save();
  return savedProyect
};
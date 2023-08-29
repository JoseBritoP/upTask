import User from "../../models/User";
import Proyect from "../../models/Proyect";
import Task from "../../models/Task";

export const getAllUsers = async () => {
  const users = await User.find({deleted:false,confirmed:true})
  .select("_id username email proyects")
  .populate({
    path: "proyects",
    match: { deleted: false },
    select: "_id name description limitDate client collaborators tasks creator"
  });
  if(!users || users.length === 0) throw new Error (`User's not found`)
  return users
}
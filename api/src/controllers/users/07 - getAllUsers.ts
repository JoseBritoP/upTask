import User from "../../models/User";

export const getAllUsers = async () => {
  const users = await User.find({banned:false,confirmed:false})
  .select("_id username email proyects")
  .populate({
    path: "proyects",
    match: { deleted: false },
    select: "_id name description limitDate client collaborators tasks",
    populate: {
      path: "tasks",
      match: { deleted: false },
      select: "_id name description state limitDate priority completed" 
    }
  });
  if(!users || users.length === 0) throw new Error (`User's not found`)
  return users
}
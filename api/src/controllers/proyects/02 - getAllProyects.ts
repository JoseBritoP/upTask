import Proyect from "../../models/Proyect";

export const getAllProyects = async ({creatorId}:any) => {
  // const proyects = await Proyect.find().where('creator').equals(creatorId);
  const proyects = await Proyect.find({
    creator:creatorId,
    deleted:false
  }).select("_id name description limitDate client collaborators tasks creator")
  .populate({
    path: "tasks",
    match: {deleted:false},
    select: "_id name description state limitDate priority completed"
  })
  return proyects
};
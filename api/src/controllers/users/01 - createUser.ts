import User from "../../models/User";

const checkUsernameExist = async (username:string) => {
  const user = await User.findOne({username});
  if(user) throw new Error (`Username already in use`);

};
const checkEmailExist = async (email:string) => {
  const user = await User.findOne({email});
  if(user) throw new Error (`Email already in use`);
};

export const createUser = async (username:string,email:string,password:string) => {

  await checkUsernameExist(username);
  await checkEmailExist(email);
  const newUser = new User({username,email,password})
  const savedUser = await newUser.save();
  return savedUser;
};
import mongoose from 'mongoose';
const MONGO_URI = <string>process.env.MONGO_URI
export const connectDB = async () => {
  try {
    const conecction = await mongoose.connect(`${MONGO_URI}`)

    const url = `${conecction.connection.host}:${conecction.connection.port}`;
    console.log(`MongoBD conectado en ${url}`)
  } catch (error:any) {
    console.log(`error: ${error.message}`)
    process.exit(1); //Forzar que el proceso termine
  }
};